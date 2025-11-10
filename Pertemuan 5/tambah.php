<?php
// Import file db


// Ambil data yang dikirim
if (isset($_POST['simpan'])) {
    // AMbil data menggunakan POST
    

    // Masukkan ke dalam database
    

    // Redirect ke halaman utama

}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Tambah Mahasiswa</title>
</head>
<body>
  <h2>Tambah Mahasiswa</h2>
  <form method="post">
    <label>NIM:</label><br>
    <input type="text" name="nim" required><br><br>

    <label>Nama:</label><br>
    <input type="text" name="nama" required><br><br>
    
    <label>Asal Daerah</label><br>
    <input type="text" name="asal_daerah" required><br><br>

    <label>Jurusan:</label><br>
    <input type="text" name="jurusan" required><br><br>

    <label>Angkatan:</label><br>
    <input type="number" name="angkatan" required><br><br>

    <label>URL Foto:</label><br>
    <input type="text" name="foto"><br><br>

    <button type="submit" name="simpan">Simpan</button>
  </form>

  <br>
  <a href="index.php">Kembali</a>
</body>
</html>
