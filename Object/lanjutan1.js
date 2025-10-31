function Pemain(nama, energi) {
    let pemain = {};
    pemain.nama = nama;
    pemain.energi = energi;

    pemain.makan = function (porsi) {  
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
        console.log(`Energi kamu sekarang ${this.energi}!`);
    }

    pemain.damage = function(attack) {
        this.energi -= attack;
        console.log(`Halo ${this.nama}, energi berkurang!`);
        console.log(`Energi kamu sekarang ${this.energi}!`);
    }
    return pemain;
}

let pemain1 = Pemain('Dor', 10);
let pemain2 = Pemain('Shesss', 20);

pemain1.makan(4);
pemain2.makan(10);
pemain1.damage(7);
pemain2.damage(5);