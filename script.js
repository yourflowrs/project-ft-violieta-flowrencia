// Dikerjakan oleh Rania

// Membuat popup pada awal web
Swal.fire({
	imageUrl:"Foto kelompok.jpg",
	imageWidth: 400,
	imageHeight: 300,
	showCloseButton:"true",
	title:"Selamat Datang",
	text:"Terima kasih telah mengunjungi website kami!",
	confirmButtonText:"Tutup"
});

// Membuat popup setelah memencet tombol Hacking
function hacking(){
Swal.fire({
  title: "Menuju halaman Button Hacking",
  text: "Anda akan diarahkan ke halaman Button Hacking",
  icon: "info",
  confirmButtonText: "Lanjutkan",
}).then((result) => {
	if (result.isConfirmed) {
		window.location.assign("Hacking/index.html");
	}
});
}

// Membuat popup setelah memencet tombol Photobooth
function photobooth(){
Swal.fire({
  title: "Menuju halaman Photobooth",
  text: "Anda akan diarahkan ke halaman Photobooth",
  icon: "info",
  confirmButtonText: "Lanjutkan",
}).then((result) => {
	if (result.isConfirmed) {
		window.location.assign("Photobooth/index.html");
	}
});
}

// Membuat popup setelah memencet tombol Gallery
function gallery(){
Swal.fire({
  title: "Menuju halaman Gallery",
  text: "Anda akan diarahkan ke halaman Gallery",
  icon: "info",
  confirmButtonText: "Lanjutkan",
}).then((result) => {
	if (result.isConfirmed) {
		window.location.assign("Gallery/index.html");
	}
});
}


// Dikerjakan oleh Gaby

// Menetapkan variabel dark
let dark = localStorage.getItem('dark')
// Menentukan variabel darkmode dengan tombol dengan id ‘darkmode’
const darkmode = document.getElementById('darkmode')

// Menentukan fungsi enabledark yang menetapkan variabel dark sebagai aktif
const enabledark = () => {
	document.body.classList.add('dark')
	localStorage.setItem('dark','active')
}

// Menentukan fungsi disable yang menetapkan variabel dark sebagai null dan tidak aktif
const disabledark = () => {
	document.body.classList.remove('dark')
	localStorage.setItem('dark', null)
}

// Menentukan bahwa jika dark aktif, menjalankan fungsi enabledark
if (dark === "active") enabledark()

// Menentukan setiap kali tombol darkmode di klik, menjalankan logika berikut
/*Kalau dark saat di local storage memiliki value yang tidak sama dengan aktif, maka menjalankan fungsi enable dark. 
Namun, jika value sama dengan aktif, maka menjalankan fungsi disable dark.*/
darkmode.addEventListener("click", () => {
	dark = localStorage.getItem('dark')
	if (dark !== "active"){
		enabledark()
	} else{
		disabledark()
	}
})
