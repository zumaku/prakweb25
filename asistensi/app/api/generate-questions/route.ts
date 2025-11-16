import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code || code.trim().length === 0) {
      return NextResponse.json(
        { error: 'Kode HTML tidak boleh kosong' },
        { status: 400 }
      );
    }

    const prompt = `
Anda adalah asisten dosen untuk mata kuliah Web Programming. Berdasarkan kode HTML dengan internal CSS berikut yang dibuat oleh praktikan, buatlah 5 soal pilihan ganda untuk menguji PEMAHAMAN KONSEP mereka.

Kode HTML dengan Internal CSS praktikan:
\`\`\`html
${code}
\`\`\`

ATURAN PEMBUATAN SOAL:

1. FOKUS PADA PEMAHAMAN KONSEP, BUKAN HAFALAN KODE
   - JANGAN: "Apakah kode menggunakan .header atau #header?"
   - LAKUKAN: "Apa perbedaan antara class selector dan id selector dalam CSS?"
   
   - JANGAN: "Berapa ukuran font pada elemen h1 dalam kode?"
   - LAKUKAN: "Apa yang terjadi jika font-size diberikan dalam satuan em dibanding px?"

2. SOAL HARUS MENGUJI PEMAHAMAN TENTANG:
   - Mengapa suatu property CSS digunakan
   - Apa efek dari property CSS tertentu
   - Bagaimana cara kerja selector CSS
   - Perbedaan antar property atau value CSS
   - Kapan sebaiknya menggunakan suatu teknik CSS
   - Apa dampak dari kombinasi beberapa property

3. GUNAKAN KODE PRAKTIKAN SEBAGAI KONTEKS, TAPI JANGAN TANYA DETAIL KODE
   - Lihat property CSS apa yang mereka gunakan
   - Buat soal tentang konsep dari property tersebut
   - Pastikan soal tetap relevan dengan materi praktikum

4. MATERI YANG DIUJIKAN:
   - Font style (font-family, font-size, font-weight, font-style)
   - Text style (text-align, text-decoration, text-transform, line-height, letter-spacing)
   - Background (background-color, background-image)
   - Display (block dan inline)
   - Div dan Span
   - CSS Selectors (element, class, id)

KRITERIA SOAL YANG BAIK:
✓ Menguji pemahaman konsep fundamental CSS
✓ Dapat dijawab tanpa perlu melihat kode lagi
✓ Memiliki 4 pilihan jawaban yang masuk akal
✓ Pilihan jawaban yang salah tetap plausible (tidak asal-asalan)
✓ Tingkat kesulitan sedang - tidak terlalu mudah, tidak terlalu sulit
✓ Soal menggunakan bahasa Indonesia yang jelas dan formal

CONTOH SOAL YANG BAIK:

Jika kode menggunakan "font-weight: bold":
- "Apa fungsi dari property font-weight dalam CSS?"
- "Selain kata kunci 'bold', nilai apa yang dapat digunakan pada font-weight?"
- "Apa perbedaan antara font-weight: 400 dan font-weight: 700?"

Jika kode menggunakan "text-align: center":
- "Apa yang dimaksud dengan text-align dalam CSS?"
- "Property CSS manakah yang digunakan untuk mengatur posisi horizontal teks?"
- "Apakah text-align: center juga akan meratakan elemen block child? Mengapa?"

Jika kode menggunakan ".container":
- "Apa fungsi dari class selector (.) dalam CSS?"
- "Apa perbedaan mendasar antara class dan id dalam CSS?"
- "Kapan sebaiknya menggunakan class dibanding id untuk styling?"

Jika kode menggunakan "display: block":
- "Apa karakteristik utama dari elemen dengan display: block?"
- "Apa perbedaan antara display: block dan display: inline?"
- "Elemen HTML apa saja yang secara default memiliki display: block?"

Format output HARUS dalam JSON yang valid seperti ini (jangan tambahkan teks apapun di luar JSON):
{
  "questions": [
    {
      "question": "Pertanyaan yang menguji pemahaman konsep?",
      "options": [
        "Pilihan A yang plausible", 
        "Pilihan B yang plausible", 
        "Pilihan C yang plausible", 
        "Pilihan D yang plausible"
      ],
      "correct_answer": 0
    }
  ]
}

PENTING: 
- Buat TEPAT 10 soal
- correct_answer adalah index dari jawaban yang benar (0-3)
- Pastikan output adalah JSON valid tanpa markdown atau teks tambahan
- Jangan gunakan backticks atau kode block
- Gunakan bahasa Indonesia yang baik dan benar
- Setiap soal harus bisa dijawab berdasarkan PEMAHAMAN, bukan HAFALAN
`;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that generates quiz questions in valid JSON format only. Never include markdown formatting or code blocks in your response.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      // model: 'llama-3.3-70b-versatile',
      model: "openai/gpt-oss-20b",
      temperature: 0.7,
      max_tokens: 2000,
    });

    const responseText = completion.choices[0]?.message?.content || '';
    
    // Bersihkan response dari markdown jika ada
    const cleanedResponse = responseText
      .replace(/```json\n?/g, '')
      .replace(/```\n?/g, '')
      .trim();

    const result = JSON.parse(cleanedResponse);

    if (!result.questions || !Array.isArray(result.questions)) {
      throw new Error('Format response tidak sesuai');
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error generating questions:', error);
    return NextResponse.json(
      { error: 'Gagal membuat soal. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}