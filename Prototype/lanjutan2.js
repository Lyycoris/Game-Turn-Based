

// Menambahkan Class pada Prototype
class Pemain {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    makan(porsi) {  
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }
    damage(attack) {
        this.energi -= attack;
        return `Halo ${this.nama}, energi berkurang!`;
    }
}

let pemain1 = new Pemain('Andi', 10);
let pemain2 = new Pemain('Donny', 20);



// Menggunakan function factory 
function produk(nama) {
    return function (harga,spek) {
        console.log(`Produk: ${nama}
            Harga: ${harga}
            Spesifikasi: ${spek}`);
    }
}

let laptopLOQ = produk('Laptop LOQ');
let laptopTuf = produk('Laptop ASUS');
let laptopNitro = produk('Laptop Acer Nitro');

laptopLOQ(11000000, 'RAM 16GB, SSD 512GB');
laptopTuf(12000000, 'RAM 8GB, SSD 256GB');
laptopNitro(13000000, 'RAM 16GB, SSD 1TB');

// Private method
let hitung = 0;
let tambah = function() {
    return ++hitung;
}

console.log(tambah());
hitung = 10;
console.log(tambah());
hitung = 100;
console.log(tambah());
hitung = 1000;