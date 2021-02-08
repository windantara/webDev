// //Object Literal

// let mahasiswa1 = {
//     nama: 'Reva',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Selamat makan ${this.nama}`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Athallah',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Selamat makan ${this.nama}`);
//     }
// }

// //Function Declaration
// const methodMahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Selamat makan ${this.nama}`);
//     },

//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`Selamat Main ${this.nama}`);
//     }
// }

// function Mahasiswa(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let reva = Mahasiswa('Reva', 10);
// let athallah = Mahasiswa('Athallah', 10);

// //Constructor Function

// function Mahasiswa(nama, energi){
//     // let mahasiswa = Object.create(methodMahasiswa);
//     this.nama = nama;
//     this.energi = energi;

//     // return mahasiswa;
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     console.log(`Selamat Makan ${this.nama}`);
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     console.log(`Selamat Main ${this.nama}`);
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     console.log(`Selamat Tidur ${this.nama}`)
// }

// let reva = new Mahasiswa('Reva', 10);

// Class

class Mahasiswa {
    constructor(nama, energi){
    this.nama = nama;
    this.energi = energi;
    }
    makan(porsi){
        this.energi += porsi;
        console.log(`Selamat Makan ${this.nama}`);
    }
    
    main(jam) {
        this.energi -= jam;
        console.log(`Selamat Main ${this.nama}`);
    }
    
    tidur(jam) {
        this.energi += jam * 2;
        console.log(`Selamat Tidur ${this.nama}`)
    }
}

let reva = new Mahasiswa('Reva', 10);
let athallah = new Mahasiswa('Athallah', 10);
