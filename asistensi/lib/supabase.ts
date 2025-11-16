import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Class = {
  id: string;
  name: string;
  created_at: string;
};

export type Question = {
  question: string;
  options: string[];
  correct_answer: number;
};

export type Submission = {
  id: string;
  class_id: string;
  student_name: string;
  student_nim: string;
  student_email: string;
  code: string;
  questions: Question[];
  answers: number[] | null;
  score: number | null;
  started_at: string;
  completed_at: string | null;
  time_limit_minutes: number;
  created_at: string;
};