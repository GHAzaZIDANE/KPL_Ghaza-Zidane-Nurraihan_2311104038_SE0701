const fs = require('fs');

class DataMahasiswa2311104038 {
    static ReadJSON() {
        try {
            // Baca file JSON
            const data = fs.readFileSync('./TP7_1_2311104038.json', 'utf8');
            // Parse JSON menjadi object
            const mahasiswa = JSON.parse(data);
            
            // Print semua data
            console.log("=== Data Mahasiswa ===");
            console.log(`Nama     : ${mahasiswa.nama}`);
            console.log(`NIM      : ${mahasiswa.nim}`);
            console.log(`Fakultas  : ${mahasiswa.Fakultas}`);
            console.log(`Angkatan : ${mahasiswa.angkatan}`);
        } catch (error) {
            console.error("Terjadi kesalahan saat membaca atau parsing file JSON:", error);
        }
    }
}

module.exports = DataMahasiswa2311104038;