class DoorMachine {
    constructor() {
        this.state = "Terkunci";
        console.log("Pintu terkunci");
    }
    
    ubahState(aksi) {
        if (this.state === "Terkunci" && aksi === "BukaPintu") {
            this.state = "Terbuka";
            console.log("Pintu tidak terkunci");
        } else if (this.state === "Terbuka" && aksi === "KunciPintu") {
            this.state = "Terkunci";
            console.log("Pintu terkunci");
        } else {
            console.log("Aksi tidak valid");
        }
    }
}

// Simulasi perubahan state
const pintu = new DoorMachine();
pintu.ubahState("BukaPintu");
pintu.ubahState("KunciPintu");
pintu.ubahState("BukaPintu");
pintu.ubahState("KunciPintu");
