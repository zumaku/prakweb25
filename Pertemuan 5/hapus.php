<?php
// Import file db
include "db.php";

// Ambil data id menggunakan GET
$id = $_GET["id"];

// Hapus data di database menggunakan is
$query = "DELETE FROM mahasiswa WHERE id = $id";
$hasil = mysqli_query($conn, $query);

// Redirect
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Status Hapus</title>
</head>
<body>
    <h1>Data dengan ID: <?= $id ?> telah dihapus.</h1>
    <a href="index.php">Kembali ke beranda!</a>
</body>
</html>