<?php
// Import file db


// Ambil data id


// Ambil data mahasiswa menggunakan id


$mahasiswa = [
    'id' => 1,
    'nim' => '230101001',
    'nama' => 'Daeng Baso',
    'asal_daerah' => 'Bulukumba',
    'jurusan' => 'Teknik Informatika',
    'angkatan' => 2024,
    'foto' => 'https://randomuser.me/api/portraits/men/21.jpg'
];

// Ambil nilai mahasiswa menggunakan id


$nilai = [
    [
        'id' => 1,
        'nim' => '230101001',
        'mata_kuliah' => 'Pemrograman Web',
        'semester' => 1,
        'nilai_angka' => 88,
        'nilai_huruf' => 'A'
    ],
    [
        'id' => 2,
        'nim' => '230101002',
        'mata_kuliah' => 'Basis Data',
        'semester' => 1,
        'nilai_angka' => 79,
        'nilai_huruf' => 'B+'
    ]
];
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
