<?php
// Import file db
include "db.php";

// Ambil data id
$id = $_GET["id"];

// Ambil data
$query = "SELECT * FROM mahasiswa WHERE id = $id";
$hasil = mysqli_query($conn, $query);

// Extrak data
$data = mysqli_fetch_assoc($hasil);


if (isset($_POST['update'])) {
    // AMbil data menggunakan POST
    $nim = $_POST["nim"];
    $nama = $_POST["nama"];
    $asal_daerah = $_POST["asal_daerah"];
    $jurusan = $_POST["jurusan"];
    $angkatan = $_POST["angkatan"];
    $foto = $_POST["foto"];

    // Update data di dalam database
      $query = "UPDATE mahasiswa
      SET nim = '$nim', nama = '$nama', asal_daerah = '$asal_daerah', jurusan = '$jurusan', angkatan = '$angkatan', foto = '$foto' 
      WHERE id = $id
    ";
    $update = mysqli_query($conn, $query);

    // Redirect ke halaman utama
    header("Location: index.php");
    exit();

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
    <input type="text" name="nim" value="<?= $data["nim"] ?>" required><br><br>

    <label>Nama:</label><br>
    <input type="text" name="nama" value="<?= $data['nama'] ?>" required><br><br>

    <label>Asal Daerah:</label><br>
    <input type="text" name="asal_daerah" value="<?= $data['asal_daerah'] ?>" required><br><br>

    <label>Jurusan:</label><br>
    <input type="text" name="jurusan" value="<?= $data['jurusan'] ?>" required><br><br>

    <label>Angkatan:</label><br>
    <input type="number" name="angkatan" value="<?= $data['angkatan'] ?>" required><br><br>

    <label>URL Foto:</label><br>
    <input type="text" name="foto" value="<?= $data['foto'] ?>"><br><br>

    <input type="submit" name="update" value="Update">
  </form>

  <br>
  <a href="index.php">Kembali</a>
</body>
</html>
