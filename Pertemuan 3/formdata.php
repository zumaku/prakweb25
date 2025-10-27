<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Data</title>
</head>
<body>
    <h1>Input Data Mahasiswa</h1>
    <form action="tabledata.php" method="post">
        <label for="nama">Nama</label>
        <input type="text" id="nama" name="nama"><br>
        
        <label for="nim">NIM</label>
        <input type="number" id="nim" name="nim"><br>

        <label for="kelas">Kelas</label>
        <select name="kelas" id="kelas">
            <option value="Kelas A">Kelas A</option>
            <option value="Kelas B">Kelas B</option>
            <option value="Kelas C">Kelas C</option>
            <option value="Kelas D">Kelas D</option>
            <option value="Kelas E">Kelas E</option>
            <option value="Kelas F">Kelas F</option>
        </select><br>
        
        <input type="radio" id="lk" name="jk" value="Laki-laki">
        <label for="lk">Laki-laki</label>
        <input type="radio" id="pr" name="jk" value="Perempuan">
        <label for="pr">Perempuan</label><br>

        <button type="submit">Kirim</button>
    </form>
</body>
</html>