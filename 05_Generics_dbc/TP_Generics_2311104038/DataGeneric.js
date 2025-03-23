// Class dengan method generic
class HaloGeneric {
    static SapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}

// Memanggil method dengan input nama panggilan
HaloGeneric.SapaUser("Praktikan");

// Class dengan properti generic
class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

// Membuat instance dari DataGeneric dan memanggil PrintData
const nimData = new DataGeneric(12345678);
nimData.PrintData();
