<?php

    // echo $_GET["nama"];
    // echo $_GET["nim"];
    // echo $_GET["kelas"];
    // echo $_GET["jk"];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Mahasiswa</title>
</head>
<body>
    <h3>Data Mahasiswa</h3>
    <table border="1">
        <tr>
            <td>Nama:</td>
            <td>
                <?php echo $_POST["nama"] ?>
            </td>
        </tr>
        <tr>
            <td>Nin:</td>
            <td>
                <?php echo $_POST["nim"] ?>
            </td>
        </tr>
        <tr>
            <td>Kelas:</td>
            <td>
                <?php echo $_POST["kelas"] ?>
            </td>
        </tr>
        <tr>
            <td>Jenis Kelamin:</td>
            <td>
                <?php echo $_POST["jk"] ?>
            </td>
        </tr>
    </table>

    <br>

    <a href="formdata.php">Kembali ke Form</a>
</body>
</html>