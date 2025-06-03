// Kelas dengan method generic
class HaloGeneric {
    // Method untuk menyapa user
    static sapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}

// Memanggil method dengan input nama panggilan
HaloGeneric.sapaUser("Praktikan");


// Kelas dengan properti generic
class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    // Method untuk menampilkan data
    printData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

// Membuat instance dari DataGeneric dan memanggil printData
const nimData = new DataGeneric(12345678);
nimData.printData();
