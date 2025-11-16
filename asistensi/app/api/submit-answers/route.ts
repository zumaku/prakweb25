import { NextRequest, NextResponse } from 'next/server';
import { supabase, Question } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { submissionId, answers } = await request.json();

    // Ambil submission
    const { data: submission, error: fetchError } = await supabase
      .from('submissions')
      .select('*')
      .eq('id', submissionId)
      .single();

    if (fetchError || !submission) {
      return NextResponse.json(
        { error: 'Submission tidak ditemukan' },
        { status: 404 }
      );
    }

    // Cek apakah sudah complete
    if (submission.completed_at) {
      return NextResponse.json(
        { error: 'Tes sudah diselesaikan sebelumnya' },
        { status: 400 }
      );
    }

    // Hitung score
    const questions = submission.questions as Question[];
    let correctCount = 0;

    questions.forEach((q, index) => {
      if (answers[index] === q.correct_answer) {
        correctCount++;
      }
    });

    const score = Math.round((correctCount / questions.length) * 100);

    // Update submission
    const { data, error } = await supabase
      .from('submissions')
      .update({
        answers,
        score,
        completed_at: new Date().toISOString(),
      })
      .eq('id', submissionId)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({ 
      submission: data,
      score,
      correctCount,
      totalQuestions: questions.length 
    });
  } catch (error) {
    console.error('Error submitting answers:', error);
    return NextResponse.json(
      { error: 'Gagal menyimpan jawaban' },
      { status: 500 }
    );
  }
}