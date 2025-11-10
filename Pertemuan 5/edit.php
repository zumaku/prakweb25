<?php
// Import file db

// Ambil data id

// Ambil data

// Extrak data


if (isset($_POST['update'])) {
    // AMbil data menggunakan POST
    

    // Update data di dalam database
    

    // Redirect ke halaman utama
    

}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Edit Mahasiswa</title>
</head>
<body>
  <h2>Edit Mahasiswa</h2>

  <form method="post">
    <label>NIM:</label><br>
    <input type="text" name="nim" value="Ganti Nim nya" required><br><br>

    <label>Nama:</label><br>
    <input type="text" name="nama" value="Ganti Namanya" required><br><br>

    <label>Asal Daerah:</label><br>
    <input type="text" name="jurusan" value="Ganti Asalnya" required><br><br>

    <label>Jurusan:</label><br>
    <input type="text" name="jurusan" value="Ganti Jurusannya" required><br><br>

    <label>Angkatan:</label><br>
    <input type="number" name="angkatan" value="Ganti Angkatannya" required><br><br>

    <label>URL Foto:</label><br>
    <input type="text" name="foto" value="Ganti URL Fotonya"><br><br>

    <input type="submit" name="update" value="Update">
  </form>

  <br>
  <a href="index.php">Kembali</a>
</body>
</html>
