// ======================
// Query Selector
// ======================

// const h1 = document.querySelector("#judul")
// console.log(h1)

// const box = document.querySelector(".box")
// console.log(box)








// ======================
// Event
// ======================

const tombolPeringatan = document.querySelector("#peringatan")
console.log(tombolPeringatan)

// Lakukan Kejaidan
// addEventListener( kejadian, aksi )

let angka = 0
tombolPeringatan.addEventListener("click", () => {
    console.log("Tombol Ditekan", angka+1)
    angka+=1
})














// ======================
// InnerText & InnerHTML
// ======================


// innerText
const ubahText = document.querySelector("#ubahTextBtn")
const h1 = document.querySelector("#judul")

ubahText.addEventListener("click", () => {
    h1.innerText = "Ini Materi JavaScript";
})


// innerHTML
const ubahHTML = document.querySelector("#ubahHtmlBtn")
const box1 = document.querySelector("#box1")

ubahHTML.addEventListener("click", () => {
    console.log(box1.innerHTML)
    box1.innerHTML = `
    <h3>Textnya Sudah Berubah📄</h3>
    <a href="https://instagram.com/fadliinlov3" target="_blank" >Link IG ku</a>
    `
})

















const ubahStyle = document.querySelector("#ubahBox3")
const box3 = document.querySelector("#box3")

ubahStyle.addEventListener("click", () => {
    box3.innerHTML = `
    <h3>Nama Saya Zuma</h3>
    <img src="images.jpg" />
    `
})











// Manipulasi Class

const overlayTombol = document.querySelector("#showOverlayBtn")
const overlay = document.querySelector("#overlay")
const tutupTombol = document.querySelector("#closeOverlayBtn")

overlayTombol.addEventListener("click", () => {
    overlay.classList.add("active")
})

tutupTombol.addEventListener("click", () => {
    overlay.classList.remove("active")
})