// Program Javascript dengan menggunakan if untuk menentukan apakah suatu nilai positif atau tidak

var nilai = 5;

if (nilai > 0) {
    console.log("Bilangan positif");
}

// Jadi nilai tidak akan keluar jika nilai yang diisi tidak memenuhi kondisi if yaitu lebih dari nol


// Program Javascript dengan menggunakan else untuk menentukan apakah suatu nilai positif, negatif atau nol

var nilai = -5;

if (nilai > 0) {
    console.log("Bilangan positif");
} else {
    console.log("Bilangan negatif atau nol");
}

// Jadi nilai yang lebih dari 0 akan menampilkan Bilangan positif sedangkan nilai selain itu yang dimasukkan adalah negatif atau nol


// Program Javascript yang menggunakan nested if untuk menentukan kelasifikasi nilai berdasarkan nilai yang diinput

var nilai = 75;

if (nilai >= 90) {
    console.log("Kelasifikasi A");
} else if (nilai >= 80 && nilai <= 89) {
    console.log("Kelasifikasi B");
} else if (nilai >= 70 && nilai <= 79) {
    console.log("Kelasifikasi C");
} else {
    console.log("Kelasifikasi D");
}

// Jadi nilai yang diinput akan masuk satu diantara kelasifikasi yang memenuhi syarat atau kondisi


// Program JavaScript yang menggunakan switch case untuk menentukan jenis not dalam satu oktaf berdasarkan angka urutannya

var not = 5; // Ganti dengan angka yang sesuai dengan not yang diinginkan (1 samapi 7)

switch (not) {
    case 1:
        console.log("Do");
        break;
    case 2:
        console.log("Re");
        break;
    case 3:
        console.log("Mi");
        break;
    case 4:
        console.log("Fa");
        break;
    case 5:
        console.log("Sol");
        break;
    case 6:
        console.log("La");
        break;
    case 7:
        console.log("Si");
        break;
    default:
        console.log("Input tidak valid. Masukkan hanya angka 1 sampai 7.");
}

// Jadi jika not yang diinputkan dengan angka 1 sampai 7 akan menampilkan not pada urutan tersebut, jika tidak akan menampilkan inputan tidak valid


// Program JavaScript dengan menggunakan for statement untuk mencetak daftar barang yang dibawa ke sekolah

var daftarBarang = ['Buku', 'Pulpen', 'Tempat Pensil', 'Botol Minum', 'Tas', 'Handphone'];

console.log("Daftar Barang yang dibawa ke Sekolah:");
for (var i = 0; i < daftarBarang.length; i++) {
    console.log(i + 1 + ". " + daftarBarang[i]);
}

// Dengan ini daftar barang yang diinput akan tercetak


// Program Javascript dengan menggunakan while untuk menghitung mundur pergantian tahun baru

let waktuBaru = 10; // Waktu tidur dalam detik
console.log("Mulai hitung mundur sebelum Tahun Baru 2023:");

while (waktuBaru > 0) {
  console.log(waktuBaru + " detik sebelum Tahun Baru...");
  waktuBaru--;
}

console.log("Selamat Tahun Baru 2023");

//Jadi program ini melakukan perulangan, yaitu perhitungan mundur 10 detik sebelum Tahun Baru


// Program Javascript menggunakan do-while untuk meminta input pengguna

let input;

do {
  input = prompt("Masukkan bilangan negatif");
} while (input > 0);

console.log("Terima kasih kakak!");

// Jadi program ini akan mengulang terus menerus sampai inputan yang dimasukkan adlah bilangan negatif


// Program JavaScript yang menggunakan function untuk menghitung total pembelian buku setelah diskon

// Fungsi untuk menghitung total pembelian buku sebelum dan setelah diskon
function hitungTotalBeli(hargaBarang, jumlahBarang, diskon) {
    var totalSebelumDiskon = hargaBarang * jumlahBarang;
    var totalSetelahDiskon = totalSebelumDiskon - (totalSebelumDiskon * diskon);

    return [totalSebelumDiskon, totalSetelahDiskon];
}

// penginputan jumlah buku
var hargaBuku = 20;
var jumlahBuku = parseInt(prompt("Masukkan jumlah buku : "));

// Menghitung total pembelian buku dengan diskon 5%
var diskonPersen = 0.05;
var totalBeliBuku = hitungTotalBeli(hargaBuku, jumlahBuku, diskonPersen);

// Menampilkan harga buku, jumlah buku dan diskon
console.log("Harga satuan buku : $" + hargaBuku);
console.log("Jumlah buku : " + jumlahBuku);
console.log("Diskon : " + (diskonPersen * 100) + "%");

// Menampilkan total buku sebelum dan setelah diskon
console.log("Total buku sebelum diskon : $" + totalBeliBuku[0]);
console.log("Total belanja buku setelah diskon : $" + totalBeliBuku[1]);
console.log("Terima kasih telah berbelanja kakak!")