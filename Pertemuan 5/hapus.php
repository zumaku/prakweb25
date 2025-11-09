<?php
include 'db.php';

$id = (int) $_GET['id'];
mysqli_query($conn, "DELETE FROM mahasiswa WHERE id=$id");

// header("Location: index.php");
exit;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Berhasil Menghapus</title>
</head>
<body>
    <h1>Data dengan ID: <?= $id ?> berhasil dihapus</h1>
    <a href="indedx.php">Kembali ke beranda</a>
</body>
</html>