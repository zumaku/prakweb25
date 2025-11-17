# 📘 **Materi CSS Dasar**

## 1. **Selector**

Selector digunakan untuk memilih elemen HTML yang ingin diberi gaya (style).

### Jenis–jenis Selector:

1. **Element Selector**

   ```css
   p {
     color: blue;
   }
   ```

   → Menargetkan semua elemen `<p>`.

2. **Class Selector**

   ```css
   .judul {
     color: red;
   }
   ```

   → Dipakai untuk banyak elemen yang ingin diberi gaya yang sama.

3. **ID Selector**

   ```css
   #header {
     background: black;
   }
   ```

   → Khusus satu elemen unik.

4. **Universal Selector**

   ```css
   * {
     margin: 0;
   }
   ```

   → Menargetkan semua elemen.

5. **Group Selector**

   ```css
   h1, h2, p {
     font-family: Arial;
   }
   ```

   → Menggabungkan banyak selector.

---

## 2. **Font Style**

Digunakan untuk mengatur gaya tulisan.

### Properti utama:

1. **font-family**

   ```css
   p {
     font-family: Arial, sans-serif;
   }
   ```

2. **font-size**

   ```css
   p {
     font-size: 18px;
   }
   ```

3. **font-weight**

   ```css
   p {
     font-weight: bold;
   }
   ```

4. **font-style**

   ```css
   p {
     font-style: italic;
   }
   ```

5. **line-height**

   ```css
   p {
     line-height: 1.5;
   }
   ```

---

## 3. **Text Style**

Mengatur tampilan teks.

### Properti penting:

1. **color**

   ```css
   h1 {
     color: #00ffee;
   }
   ```

2. **text-align**

   ```css
   p {
     text-align: center;
   }
   ```

3. **text-decoration**

   ```css
   a {
     text-decoration: none;
   }
   ```

4. **text-transform**

   ```css
   p {
     text-transform: uppercase;
   }
   ```

5. **letter-spacing / word-spacing**

   ```css
   h2 {
     letter-spacing: 2px;
   }
   ```

---

## 4. **Background**

Properti CSS untuk mengatur latar belakang elemen.

### Properti:

1. **background-color**

   ```css
   div {
     background-color: lightblue;
   }
   ```

2. **background-image**

   ```css
   div {
     background-image: url("gambar.jpg");
   }
   ```

3. **background-size**

   ```css
   background-size: cover;
   ```

4. **background-repeat**

   ```css
   background-repeat: no-repeat;
   ```

5. **background-position**

   ```css
   background-position: center;
   ```

---

## 5. **Div dan Span**

Elemen dasar untuk mengelompokkan konten.

### **DIV**

* Elemen **block-level** (mengambil satu baris penuh).
* Cocok untuk layout.

Contoh:

```html
<div class="box">Isi konten</div>
```

### **SPAN**

* Elemen **inline** (sebaris dengan teks lainnya).
* Cocok untuk styling kecil.

Contoh:

```html
<p>Nama saya <span class="highlight">Zul</span></p>
```

---

## 6. **Display: Block dan Inline**

Mengatur bagaimana elemen ditampilkan dalam dokumen.

### **Block**

* Mengambil satu baris penuh.
* Bisa diatur width & height.

Contoh elemen block: `div`, `p`, `h1`

```css
div {
  display: block;
}
```

### **Inline**

* Tidak memulai baris baru.
* Tidak bisa diberi width & height secara penuh.

Contoh elemen inline: `span`, `a`, `b`

```css
span {
  display: inline;
}
```

### **Inline-block (bonus penting!)**

* Berperilaku inline, tapi bisa diatur ukuran seperti block.

```css
.button {
  display: inline-block;
  padding: 10px;
}
```

---

# 📚 Rangkuman Materi

| Materi     | Inti Pembahasan                                  |
| ---------- | ------------------------------------------------ |
| Selector   | Cara memilih elemen untuk diberi style           |
| Font Style | Mengatur jenis dan bentuk huruf                  |
| Text Style | Mengatur tampilan teks (warna, posisi, dekorasi) |
| Background | Mengatur latar belakang elemen                   |
| Div & Span | Elemen untuk layout dan inline styling           |
| Display    | Cara elemen muncul: block, inline, inline-block  |