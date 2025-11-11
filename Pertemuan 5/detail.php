<?php
// Import file db
include "db.php";

// Ambil data id
$id = $_GET["id"];

// Ambil data mahasiswa menggunakan id
$query = "SELECT * FROM mahasiswa WHERE id = $id";
$hasil = mysqli_query($conn, $query);

// Ekstrak data
$mahasiswa = mysqli_fetch_assoc($hasil);


// Ambil nilai mahasiswa menggunakan id
$queryNilai = "SELECT * FROM nilai_mahasiswa WHERE mahasiswa_id = $id";
$hasilNilai = mysqli_query($conn, $queryNilai);

// Ekstrak Data Nilai
$nilai = mysqli_fetch_all($hasilNilai, MYSQLI_ASSOC);
?>

<!DOCTYPE html>
<html>
<head>
  <title>Detail Mahasiswa</title>
</head>
<body>
  <h2>Detail Mahasiswa</h2>

  <?php if ($mahasiswa): ?>
    <img src="<?= $mahasiswa['foto'] ?>" width="100" height="100"><br><br>
    <b>NIM:</b> <?= $mahasiswa['nim'] ?><br>
    <b>Nama:</b> <?= $mahasiswa['nama'] ?><br>
    <b>Asal Daerah:</b> <?= $mahasiswa['asal_daerah'] ?><br>
    <b>Jurusan:</b> <?= $mahasiswa['jurusan'] ?><br>
    <b>Angkatan:</b> <?= $mahasiswa['angkatan'] ?><br><br>

    <h3>Nilai Mahasiswa</h3>
    <?php if (count($nilai) > 0): ?>
      <table border="1" cellpadding="8" cellspacing="0">
        <tr>
          <th>No</th>
          <th>Mata Kuliah</th>
          <th>Semester</th>
          <th>Nilai Angka</th>
          <th>Nilai Huruf</th>
        </tr>
        <?php $no = 1; ?>
        <?php foreach ($nilai as $n): ?>
          <tr>
            <td><?= $no++ ?></td>
            <td><?= $n['mata_kuliah'] ?></td>
            <td><?= $n['semester'] ?></td>
            <td><?= $n['nilai_angka'] ?></td>
            <td><?= $n['nilai_huruf'] ?></td>
          </tr>
        <?php endforeach; ?>
      </table>
    <?php else: ?>
      <p><i>Belum ada data nilai untuk mahasiswa ini.</i></p>
    <?php endif; ?>

  <?php else: ?>
    <p>Data mahasiswa tidak ditemukan.</p>
  <?php endif; ?>

  <br>
  <a href="index.php">Kembali ke daftar</a>
</body>
</html>
