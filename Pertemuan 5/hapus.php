<?php
include 'db.php';

$id = (int) $_GET['id'];
mysqli_query($conn, "DELETE FROM mahasiswa WHERE id=$id");

header("Location: index.php");
exit;
?>
