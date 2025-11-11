<?php
// Import file db
include "db.php";

// Ambil data yang dikirim
if (isset($_POST['simpan'])) {
    // Ambil data menggunakan POST
    $nim = $_POST["nim"];
    $nama = $_POST["nama"];
    $asal_daerah = $_POST["asal_daerah"];
    $jurusan = $_POST["jurusan"];
    $angkatan = $_POST["angkatan"];
    $foto = $_POST["foto"];

    // Masukkan ke dalam database
    $query = "INSERT INTO mahasiswa
      (nim, nama, asal_daerah, jurusan, angkatan, foto)
      VALUES ('$nim', '$nama', '$asal_daerah', '$jurusan', $angkatan, '$foto')
    ";
    $hasil = mysqli_query($conn, $query);

    // Redirect ke halaman utama
    header("Location: index.php");
    exit();
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
