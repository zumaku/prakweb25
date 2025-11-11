<?php
// Import file db
include "db.php";

// Ambil data id menggunakan GET
$id = $_GET["id"];

// Hapus data di database menggunakan is
$query = "DELETE FROM mahasiswa WHERE id = $id";
$hasil = mysqli_query($conn, $query);

// Redirect
header("Location: index.php");
exit;
?>