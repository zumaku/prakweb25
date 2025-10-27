<?php

$data = [
    [
        'nama' => 'Zul Fadli',
        'jurusan' => 'Teknik Informatika',
        'angkatan' => 2021,
        'ipk' => 3.85
    ],
    [
        'nama' => 'Aisyah Putri',
        'jurusan' => 'Sistem Informasi',
        'angkatan' => 2020,
        'ipk' => 3.92
    ],
    [
        'nama' => 'Ahmad Rizal',
        'jurusan' => 'Teknik Komputer',
        'angkatan' => 2022,
        'ipk' => 3.70
    ],
];

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prak Web 1</title>
</head>
<body>
    <!-- <?php
    foreach($data as $mhs) {
        echo"<h1>{$mhs["nama"]}</h1>";
        echo"<h3>{$mhs["jurusan"]}</h3>";
        echo"<p>{$mhs["angkatan"]}</p>";
        echo"<p>{$mhs["ipk"]}</p>";
        echo"<br>";
    }
    ?> -->

    <?php foreach($data as $mhs): ?>
        <h1>
            <?= $mhs["nama"] ?>
        </h1>
        <h3>
            <?= $mhs["jurusan"] ?>
        </h3>
        <p>
            <?= $mhs["angkatan"] ?>
        </p>
        <p>
            <?= $mhs["ipk"] ?>
        </p>
        <br>
    <?php endforeach ?>
</body>
</html>