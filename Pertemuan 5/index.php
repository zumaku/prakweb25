<?php
// Import file db
include "db.php";

// Ambil data
$query = "SELECT * FROM mahasiswa";
$hasil = mysqli_query($conn, $query);

// Extrak data
// Menggunakan mysqli_fetch_assoc($data) untuk one dimentional data
// Menggunakan mysqli_fetch_all($data, MYSQLI_ASSOC); untuk mutidimensional data

$mahasiswa = mysqli_fetch_all($hasil, MYSQLI_ASSOC);
?>

<!DOCTYPE html>
<html>
<head>
  <title>Data Mahasiswa</title>
</head>
<body>
  <h2>Data Mahasiswa</h2>
  <a href="tambah.php">+ Tambah Mahasiswa</a>
  <br><br>

  <table border="1" cellpadding="8" cellspacing="0">
    <tr>
      <th>No</th>
      <th>Foto</th>
      <th>NIM</th>
      <th>Nama</th>
      <th>Asal</th>
      <th>Jurusan</th>
      <th>Angkatan</th>
      <th>Aksi</th>
    </tr>

    <?php $no = 1; ?>
    <?php foreach ($mahasiswa as $mhs): ?>
      <tr>
        <td><?= $no++ ?></td>
        <td><img src="<?= $mhs['foto'] ?>" width="50" height="50"></td>
        <td><?= $mhs['nim'] ?></td>
        <td><?= $mhs['nama'] ?></td>
        <td><?= $mhs['asal_daerah'] ?></td>
        <td><?= $mhs['jurusan'] ?></td>
        <td><?= $mhs['angkatan'] ?></td>
        <td>
          <a href="detail.php?id=<?= $mhs['id'] ?>">Detail</a> |
          <a href="edit.php?id=<?= $mhs['id'] ?>">Edit</a> |
          <a href="hapus.php?id=<?= $mhs['id'] ?>" onclick="return confirm('Yakin hapus data ini?')">Hapus</a>
        </td>
      </tr>
    <?php endforeach; ?>
  </table>
</body>
</html>
