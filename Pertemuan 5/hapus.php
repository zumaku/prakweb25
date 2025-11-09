<?php
// Import file db
include 'db.php';

// Ambil data id menggunakan GET
$id = (int) $_GET['id'];

// Hapus data di database menggunakan is
mysqli_query($conn, "DELETE FROM mahasiswa WHERE id=$id");

// Redirect
header("Location: index.php");
exit;
?>