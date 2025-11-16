'use client';

import { useState, useEffect } from 'react';
import { supabase, Submission, Question } from '@/lib/supabase';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, XCircle, Home, Trophy, Target } from 'lucide-react';
import { use } from 'react';

export default function ResultPage({ params }: { params: Promise<{ id: string }> }) {
  // ✅ Unwrap params menggunakan React.use()
  const resolvedParams = use(params);
  const [submission, setSubmission] = useState<Submission | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (resolvedParams.id) {
      const loadData = async () => {
      const { data, error } = await supabase
        .from('submissions')
        .select('*')
        .eq('id', resolvedParams.id)
        .single();

      if (error || !data) {
        alert('Submission tidak ditemukan');
        return;
      }

      setSubmission(data);
      setLoading(false);
    };

      loadData();
    }
  }, [resolvedParams.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <Card className="w-64">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-4">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
              <p className="text-sm text-muted-foreground">Memuat hasil...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!submission) return null;

  const questions = submission.questions as Question[];
  const answers = submission.answers as number[];
  const score = submission.score || 0;
  const correctCount = answers?.filter((a, i) => a === questions[i]?.correct_answer).length || 0;

  const getScoreColor = () => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-amber-600';
    return 'text-red-600';
  };

  const getScoreBgColor = () => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-blue-100';
    if (score >= 40) return 'bg-amber-100';
    return 'bg-red-100';
  };

  const getGrade = () => {
    if (score >= 80) return 'A';
    if (score >= 70) return 'B';
    if (score >= 60) return 'C';
    if (score >= 50) return 'D';
    return 'E';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Score Card */}
        <Card className="mb-8 shadow-xl border-0">
          <CardContent className="pt-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-4">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Hasil Quiz Anda</h1>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Score */}
                <div className={`${getScoreBgColor()} rounded-2xl p-6`}>
                  <div className="text-sm text-gray-600 mb-2">Nilai Akhir</div>
                  <div className={`text-6xl font-bold ${getScoreColor()}`}>{score}</div>
                  <Badge variant="secondary" className="mt-3">
                    Grade: {getGrade()}
                  </Badge>
                </div>

                {/* Correct Answers */}
                <div className="bg-green-100 rounded-2xl p-6">
                  <div className="text-sm text-gray-600 mb-2">Jawaban Benar</div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                    <div className="text-5xl font-bold text-green-600">{correctCount}</div>
                  </div>
                  <div className="text-sm text-gray-600 mt-3">dari {questions.length} soal</div>
                </div>

                {/* Wrong Answers */}
                <div className="bg-red-100 rounded-2xl p-6">
                  <div className="text-sm text-gray-600 mb-2">Jawaban Salah</div>
                  <div className="flex items-center justify-center gap-2">
                    <XCircle className="w-8 h-8 text-red-600" />
                    <div className="text-5xl font-bold text-red-600">
                      {questions.length - correctCount}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mt-3">dari {questions.length} soal</div>
                </div>
              </div>

              {/* Message */}
              <div className={`${getScoreBgColor()} rounded-xl p-4 inline-block`}>
                <p className={`text-lg font-semibold ${getScoreColor()}`}>
                  {score >= 80
                    ? '🎉 Luar biasa! Pemahaman Anda sangat baik!'
                    : score >= 60
                    ? '👍 Bagus! Terus tingkatkan pemahaman Anda!'
                    : score >= 40
                    ? '💪 Cukup baik, masih ada ruang untuk berkembang!'
                    : '📚 Pelajari kembali materi CSS dengan lebih baik!'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Student Info */}
        <Card className="mb-6 shadow-lg border-0">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground mb-1">Nama</div>
                <div className="font-semibold">{submission.student_name}</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">NIM</div>
                <div className="font-semibold">{submission.student_nim}</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Email</div>
                <div className="font-semibold">{submission.student_email}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Review Section */}
        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-6 h-6" />
              Pembahasan Soal
            </CardTitle>
            <CardDescription>
              Tinjau jawaban Anda dan pelajari pembahasan untuk setiap soal
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {questions.map((q, qIndex) => {
              const userAnswer = answers?.[qIndex] ?? -1;
              const isCorrect = userAnswer === q.correct_answer;

              return (
                <div key={qIndex}>
                  {qIndex > 0 && <Separator className="my-6" />}
                  
                  <div className="space-y-4">
                    {/* Question Header */}
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isCorrect ? 'bg-green-100' : 'bg-red-100'
                        }`}
                      >
                        {isCorrect ? (
                          <CheckCircle2 className="w-6 h-6 text-green-600" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-lg font-semibold text-gray-900 leading-relaxed">
                            Soal #{qIndex + 1}: {q.question}
                          </h3>
                          <Badge
                            variant={isCorrect ? 'default' : 'destructive'}
                            className="flex-shrink-0"
                          >
                            {isCorrect ? 'Benar' : 'Salah'}
                          </Badge>
                        </div>

                        {/* Options */}
                        <div className="space-y-2">
                          {q.options.map((option, oIndex) => {
                            const isUserAnswer = oIndex === userAnswer;
                            const isCorrectAnswer = oIndex === q.correct_answer;

                            let bgColor = 'bg-gray-50';
                            let borderColor = 'border-gray-200';

                            if (isCorrectAnswer) {
                              bgColor = 'bg-green-50';
                              borderColor = 'border-green-500';
                            } else if (isUserAnswer && !isCorrect) {
                              bgColor = 'bg-red-50';
                              borderColor = 'border-red-500';
                            }

                            return (
                              <div
                                key={oIndex}
                                className={`p-4 rounded-lg border-2 ${borderColor} ${bgColor}`}
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <span className="text-gray-900 flex-1">{option}</span>
                                  <div className="flex gap-2 flex-shrink-0">
                                    {isCorrectAnswer && (
                                      <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
                                        ✓ Jawaban Benar
                                      </Badge>
                                    )}
                                    {isUserAnswer && !isCorrect && (
                                      <Badge variant="outline" className="bg-red-100 text-red-700 border-red-300">
                                        ✗ Jawaban Anda
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Button asChild size="lg" className="min-w-[200px]">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Kembali ke Beranda
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}