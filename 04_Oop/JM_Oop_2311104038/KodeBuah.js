class KodeBuah {
    constructor() {
        this.tabelKodeBuah = {
            "Apel": "A00", "Aprikot": "B00", "Alpukat": "C00", "Pisang": "D00", "Paprika": "E00", 
            "Blackberry": "F00", "Ceri": "H00", "Kelapa": "I00", "Jagung": "J00", "Kurma": "K00", 
            "Durian": "L00", "Anggur": "M00", "Melon": "N00", "Semangka": "O00"
        };
    }
    
    getKodeBuah(namaBuah) {
        return this.tabelKodeBuah[namaBuah] || "Kode tidak ditemukan";
    }
}

// Contoh penggunaan
const kodeBuah = new KodeBuah();
console.log("Kode Apel: ", kodeBuah.getKodeBuah("Apel"));
console.log("Kode Melon: ", kodeBuah.getKodeBuah("Melon"));
console.log("Kode Durian: ", kodeBuah.getKodeBuah("Durian"));
console.log("Kode Manggis: ", kodeBuah.getKodeBuah("Manggis")); // Tidak ada dalam tabel
