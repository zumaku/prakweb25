"use client";

import { useState, useEffect } from "react";
import { supabase, Class } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  AlertCircle,
  Code2,
  Clock,
  CheckCircle2,
  AlertTriangle,
  FileCode,
  XCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter();
  const [classes, setClasses] = useState<Class[]>([]);
  const [formData, setFormData] = useState({
    classId: "",
    studentName: "",
    studentNim: "",
    studentEmail: "",
    code: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showExistingDialog, setShowExistingDialog] = useState(false);
  const [existingSubmissionId, setExistingSubmissionId] = useState("");

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    const { data } = await supabase.from("classes").select("*").order("name");
    if (data) setClasses(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Generate questions
      const questionsRes = await fetch("/api/generate-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: formData.code }),
      });

      const questionsData = await questionsRes.json();

      if (!questionsRes.ok) {
        throw new Error(questionsData.error || "Gagal generate soal");
      }

      const { questions } = questionsData;

      // Submit code
      const submitRes = await fetch("/api/submit-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          questions,
        }),
      });

      const submitData = await submitRes.json();

      if (!submitRes.ok) {
        // ✅ Cek apakah ada submission yang sudah ada
        if (submitData.existingSubmissionId) {
          // Show custom toast with action
          toast.error("Tes Sudah Dikerjakan", {
            description: (
              <div className="mt-2 space-y-3">
                {/* ROW: Icon + text */}
                <div className="flex items-start gap-3">
                  {/* <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" /> */}

                  <div>
                    <p className="text-sm text-slate-700">
                      NIM{" "}
                      <span className="font-semibold">
                        {formData.studentNim}
                      </span>
                      {" "} sudah pernah mengerjakan tes pada kelas ini.
                    </p>
                  </div>
                </div>
              </div>
            ),

            duration: 9000,

            action: {
              label: "Lihat Hasil",
              onClick: () =>
                router.push(`/result/${submitData.existingSubmissionId}`),
            },

            cancel: {
              label: "Tutup",
              onClick: () => {},
            },

            className:
              "border border-amber-300 bg-white shadow-md rounded-xl px-4 py-3",

            icon: <AlertTriangle className="h-5 w-5 text-amber-600" />,
          });

          setLoading(false);
          return;
        }

        throw new Error(submitData.error || "Gagal submit kode");
      }

      // Success toast
      toast.success("Soal berhasil dibuat!", {
        description: "Anda akan diarahkan ke halaman quiz...",
      });

      // Redirect ke halaman quiz
      setTimeout(() => {
        router.push(`/quiz/${submitData.submission.id}`);
      }, 500);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Terjadi kesalahan";
      setError(errorMessage);
      window.scrollTo({ top: 0, behavior: "smooth" });

      toast.error("Gagal memulai tes", {
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Asistensi Laporan Praktikum CSS
          </h1>
          <p className="text-lg text-gray-600">
            Upload kode HTML dengan internal CSS dan jawab soal yang dibuat
            otomatis oleh AI
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Code2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-1">AI-Powered</h3>
                <p className="text-sm text-muted-foreground">
                  Soal dibuat otomatis berdasarkan kode HTML & CSS Anda
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-1">Real-time</h3>
                <p className="text-sm text-muted-foreground">
                  Timer otomatis dan submit instant
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-1">Auto-Grade</h3>
                <p className="text-sm text-muted-foreground">
                  Hasil langsung dengan pembahasan lengkap
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Info Card */}
        <Card className="my-6 border-amber-200 bg-amber-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">
                  Perhatian Penting
                </h3>
                <ul className="space-y-1.5 text-sm text-amber-800">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">•</span>
                    <span>
                      Setiap{" "}
                      <strong>NIM hanya bisa mengerjakan tes satu kali</strong>{" "}
                      per kelas
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">•</span>
                    <span>
                      Batas waktu pengerjaan: <strong>10 menit</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">•</span>
                    <span>
                      Soal dibuat otomatis berdasarkan CSS yang ada di kode HTML
                      Anda
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">•</span>
                    <span>
                      Pastikan kode HTML dan CSS sudah benar sebelum submit
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">•</span>
                    <span>Gunakan internal CSS di dalam tag &lt;style&gt;</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle>Form Submission</CardTitle>
            <CardDescription>
              Lengkapi data diri dan upload kode HTML Anda untuk memulai tes
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Pilih Kelas */}
              <div className="space-y-2">
                <Label htmlFor="class">Pilih Kelas</Label>
                <Select
                  value={formData.classId}
                  onValueChange={(value) =>
                    setFormData({ ...formData, classId: value })
                  }
                  required
                >
                  <SelectTrigger id="class">
                    <SelectValue placeholder="-- Pilih Kelas --" />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map((cls) => (
                      <SelectItem key={cls.id} value={cls.id}>
                        {cls.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* NIM */}
              <div className="space-y-2">
                <Label htmlFor="nim">NIM</Label>
                <Input
                  id="nim"
                  type="text"
                  required
                  value={formData.studentNim}
                  onChange={(e) =>
                    setFormData({ ...formData, studentNim: e.target.value })
                  }
                  placeholder="Contoh: 2141762034"
                  maxLength={20}
                />
                <p className="text-xs text-muted-foreground">
                  NIM akan digunakan untuk validasi pengerjaan tes
                </p>
              </div>

              {/* Nama Lengkap */}
              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.studentName}
                  onChange={(e) =>
                    setFormData({ ...formData, studentName: e.target.value })
                  }
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.studentEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, studentEmail: e.target.value })
                  }
                  placeholder="email@example.com"
                />
              </div>

              {/* Kode HTML dengan Internal CSS */}
              <div className="space-y-2">
                <Label htmlFor="code" className="flex items-center gap-2">
                  <FileCode className="w-4 h-4" />
                  Kode HTML dengan Internal CSS
                </Label>
                <Textarea
                  id="code"
                  required
                  value={formData.code}
                  onChange={(e) =>
                    setFormData({ ...formData, code: e.target.value })
                  }
                  rows={16}
                  className="font-mono text-sm"
                  placeholder={`<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      margin: 0;
      padding: 20px;
    }
    
    h1 {
      color: #333;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Judul Halaman</h1>
  <p>Konten halaman...</p>
</body>
</html>`}
                />
                <div className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-blue-800">
                    Pastikan kode HTML Anda memiliki{" "}
                    <strong>tag &lt;style&gt;</strong> yang berisi internal CSS.
                    Soal akan dibuat berdasarkan CSS properties yang Anda
                    gunakan.
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full"
                size="lg"
              >
                {loading ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Membuat Soal...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Mulai Tes
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* ✅ Dialog Alternatif - Simple but Effective */}
        <Dialog open={showExistingDialog} onOpenChange={setShowExistingDialog}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100">
                <AlertTriangle className="h-12 w-12 text-amber-600" />
              </div>
              <DialogTitle className="text-center text-2xl">
                Tes Sudah Dikerjakan!
              </DialogTitle>
              <DialogDescription className="text-center text-base pt-2">
                NIM Anda sudah terdaftar dalam sistem
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              {/* NIM Display */}
              <div className="text-center p-4 bg-amber-50 rounded-lg border-2 border-amber-200">
                <p className="text-sm text-gray-600 mb-1">NIM</p>
                <p className="text-3xl font-bold text-amber-700">
                  {formData.studentNim}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  sudah mengerjakan tes untuk kelas ini
                </p>
              </div>

              {/* Info Alert */}
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Setiap mahasiswa hanya dapat mengerjakan tes{" "}
                  <strong>satu kali per kelas</strong>. Silakan lihat hasil tes
                  Anda.
                </AlertDescription>
              </Alert>

              {/* Actions Info */}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="font-semibold text-sm text-blue-900 mb-2">
                  Anda dapat:
                </p>
                <ul className="text-sm text-blue-800 space-y-1.5">
                  <li>✓ Melihat skor dan hasil tes</li>
                  <li>✓ Mempelajari pembahasan soal</li>
                  <li>✓ Mengecek jawaban Anda</li>
                </ul>
              </div>
            </div>

            <DialogFooter className="sm:space-x-2">
              <Button
                variant="outline"
                onClick={() => setShowExistingDialog(false)}
                className="w-full sm:w-auto"
              >
                Tutup
              </Button>
              <Button
                onClick={() => router.push(`/result/${existingSubmissionId}`)}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
              >
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Lihat Hasil
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
