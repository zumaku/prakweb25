<!DOCTYPE html>
<html>
<head>
    <title>Daftar Nilai Mahasiswa</title>
</head>
<body>

<h2>Daftar Nilai Mahasiswa</h2>

<?php

// Data array mahasiswa
$mahasiswa = [
    ["nim" => "60200124001", "nama" => "Ahmad Fadli", "matkul" => "Pemrograman Web", "tugas" => 85, "uts" => 80, "uas" => 90],
    ["nim" => "60200124002", "nama" => "Bunga Lestari", "matkul" => "Pemrograman Web", "tugas" => 78, "uts" => 75, "uas" => 82],
    ["nim" => "60200124003", "nama" => "Cahyo Putra", "matkul" => "Pemrograman Web", "tugas" => 92, "uts" => 88, "uas" => 91],
    ["nim" => "60200124004", "nama" => "Dewi Sari", "matkul" => "Pemrograman Web", "tugas" => 70, "uts" => 68, "uas" => 50],
    ["nim" => "60200124005", "nama" => "Eka Ramadhan", "matkul" => "Pemrograman Web", "tugas" => 60, "uts" => 85, "uas" => 90],
];

?>

<table>
    <tr>
        <th>No</th>
        <th>NIM</th>
        <th>Nama</th>
        <th>Mata Kuliah</th>
        <th>Tugas</th>
        <th>UTS</th>
        <th>UAS</th>
        <th>Nilai Akhir</th>
        <th>Keterangan</th>
    </tr>

    <tr>
        <td>1</td>
        <td>60200124001</td>
        <td>Ahmad Fadli</td>
        <td>Pemrograman Web</td>
        <td>85</td>
        <td>80</td>
        <td>90</td>
        <td>85</td>
        <td>Lulus</td>
    </tr>

    <tr>
        <td>2</td>
        <td>60200124001</td>
        <td>Bunga Lestari</td>
        <td>Pemrograman Web</td>
        <td>85</td>
        <td>80</td>
        <td>90</td>
        <td>85</td>
        <td>Lulus</td>
    </tr>

</table>

</body>
</html>
