/*Dikerjakan oleh Gaby*/


//Memastikan hanya bagian yang termasuk pada id 'Hacking' yang terlihat
function open1() {
	document.getElementById("UU").style.display = "none"; //Menghilangkan bagian dengan id 'UU'
	document.getElementById("Hacking").style.display = "block"; //Memunculkan bagian dengan id 'Hacking'
	document.getElementById("Kasus").style.display = "none"; //Menghilangkan bagian dengan id 'Kasus'

}

//Memastikan hanya bagian yang termasuk pada id 'UU' yang terlihat
function open2() {
	document.getElementById("UU").style.display = "block"; //Memunculkan bagian dengan id 'UU'
	document.getElementById("Hacking").style.display = "none"; //Menghilangkan bagian dengan id 'Hacking'
	document.getElementById("Kasus").style.display = "none";  //Menghilangkan bagian dengan id 'Kasus'
}

//Memastikan hanya bagian yang termasuk pada id 'Kasus' yang terlihat
function open3() {
	document.getElementById("UU").style.display = "none"; //Menghilangkan bagian dengan id 'UU'
	document.getElementById("Hacking").style.display = "none"; //Menghilangkan bagian dengan id 'Hacking'
	document.getElementById("Kasus").style.display = "block"; //Memunculkan bagian dengan id 'Kasus'
}

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




