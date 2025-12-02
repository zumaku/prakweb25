// External JavaScript

// Selector
const heading1 = document.getElementById("judul")
console.log(heading1)

const box = document.querySelector(".box")
console.log(box)


// Event

// 1. Tangkap Elemen yg dibutuhkan
const tampilkanBtn = document.getElementById("peringatan")

// 2. Tambahkan event
let angka = 0
tampilkanBtn.addEventListener("click", () => {
    console.log("Tombol diklik ", angka++)
})




// innerText & innerHTML


// 1. Percobaan innerText
// 1.1 Secelt Elemen yang dibutuhkan
const judul = document.querySelector("#judul")
const tombol1 = document.querySelector("#ubahTextBtn")

// 1.2 Tambahkan Aksi/Event
tombol1.addEventListener("click", ()=>{
    // 1.3 Ubah Textnya
    judul.innerText = "Hari Terakhir Praktikum."
})


// 2. innerHTML

// 2.1 Secelt Elemen yang dibutuhkan
const box1 = document.querySelector("#box1")
const tombol2 = document.querySelector("#ubahHtmlBtn")

// 2.2 Tambahkan Aksi/Event
tombol2.addEventListener("click", () => {
    // 2.3 Ubah HTML-nya
    box1.innerHTML = `
        <a href="https://instagram.com/fadliinlov3">Ini link IG</a>
        <img src="images.jpg" />
    `
})

