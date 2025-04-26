const fs = require('fs');

class KuliahMahasiswa2311104038 {
    static ReadJSON() {
        try {
            const data = fs.readFileSync('./tp7_2_2311104038.json', 'utf8');
            const obj = JSON.parse(data);

            console.log("Daftar mata kuliah yang diambil:");
            obj.matakuliah.forEach((mk, index) => {
                console.log(`MK ${index + 1} ${mk.kode} - ${mk.nama}`);
            });
        } catch (error) {
            console.error("Gagal membaca atau parsing JSON:", error);
        }
    }
}

module.exports = KuliahMahasiswa2311104038;