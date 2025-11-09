<?php
include 'db.php';

$id = (int) $_GET['id'];

// Ambil data mahasiswa
$q_mhs = mysqli_query($conn, "SELECT * FROM mahasiswa WHERE id=$id");
$mahasiswa = mysqli_fetch_assoc($q_mhs);

// Ambil nilai mahasiswa
$q_nilai = mysqli_query($conn, "SELECT * FROM nilai_mahasiswa WHERE mahasiswa_id=$id ORDER BY semester ASC");
$nilai = mysqli_fetch_all($q_nilai, MYSQLI_ASSOC);
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
