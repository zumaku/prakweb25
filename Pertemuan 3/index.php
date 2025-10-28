
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
</head>
<body>

    <form action="" method="" enctype="">

        <!-- -------------------------------------- -->
        <!--                 LABEL                  -->
        <!-- -------------------------------------- -->
        
        <label for="">Ini adalah Label</label>
        <br>

        <label for="nama">Nama</label>
        <input type="text" id="nama">


        <!-- -------------------------------------- -->
        <!--               INPUT FORM               -->
        <!-- -------------------------------------- -->

        <!--
        Input Form:
        1. Text box
        2. Text area
        3. Number
        4. Password
        5. Radio button
        6. Check box
        7. Select
        8. ..masih banyak lagi
        -->

        <br><br><br><br><br><br>

        <!-- Text Box -->
        <label for="">Text Box</label>
        <input type="text">
        <br>
        
        <!-- Text Area -->
        <label for="">Text Area</label>
        <textarea name="" id=""></textarea>
        <br>
        
        <!-- Number -->
        <label for="">Number</label>
        <input type="number" name="number">
        <br>

        <!-- Password -->
        <label for="">Password</label>
        <input type="password" name="password">
        <br>
        
        <!-- Radio Button -->
        <h3>Pilih JK</h3>
        <input type="radio" id="lk" name="jk">
        <label for="lk">Laki-laki</label>
        <input type="radio" id="pr" name="jk">
        <label for="pr">Perempuan</label>
        <br>
        
        <!-- Check Box -->
        <h3>Hobi</h3>
        <input type="checkbox" id="lk" name="hobi">
        <label for="lk">Berenang</label>
        <input type="checkbox" id="lk" name="hobi">
        <label for="lk">Hiking</label>
        <input type="checkbox" id="lk" name="hobi">
        <label for="lk">Memasak</label>
        <input type="checkbox" id="lk" name="hobi">
        <label for="lk">Baca Bukur</label>
        <br>

        <!-- Select -->
        <label for="kelas">
            <h3>Pilih Kelas</h3>
        </label>
        <select name="kelas" id="kelas">
            <option value="Kelas A">Kelas A</option>
            <option value="Kelas B">Kelas B</option>
            <option value="Kelas C">Kelas C</option>
            <option value="Kelas D">Kelas D</option>
        </select>
        


        <!-- -------------------------------------- -->
        <!--                 BUTTON                 -->
        <!-- -------------------------------------- -->
        <button type="submit">Kirim</button>


    </form>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
</body>
</html>