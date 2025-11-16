import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { classId, studentName, studentNim, studentEmail, code, questions } = await request.json();

    // Validasi input
    if (!studentNim || !studentNim.trim()) {
      return NextResponse.json(
        { error: 'NIM wajib diisi' },
        { status: 400 }
      );
    }

    // Cek apakah sudah pernah submit berdasarkan NIM dan class_id
    const { data: existing } = await supabase
      .from('submissions')
      .select('*')
      .eq('student_nim', studentNim)
      .eq('class_id', classId)
      .single();

    if (existing) {
      // ✅ Return submission ID yang sudah ada untuk redirect ke hasil
      return NextResponse.json(
        { 
          error: `NIM ${studentNim} sudah mengerjakan tes untuk kelas ini sebelumnya.`,
          existingSubmissionId: existing.id, // Kirim ID submission yang sudah ada
          completed: !!existing.completed_at
        },
        { status: 400 }
      );
    }

    // Insert submission baru
    const { data, error } = await supabase
      .from('submissions')
      .insert({
        class_id: classId,
        student_name: studentName,
        student_nim: studentNim,
        student_email: studentEmail,
        code,
        questions,
        time_limit_minutes: 10,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({ submission: data });
  } catch (error) {
    console.error('Error submitting code:', error);
    return NextResponse.json(
      { error: 'Gagal menyimpan submission' },
      { status: 500 }
    );
  }
}