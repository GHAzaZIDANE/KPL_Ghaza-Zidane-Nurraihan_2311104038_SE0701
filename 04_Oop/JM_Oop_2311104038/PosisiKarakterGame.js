class PosisiKarakterGame {
    constructor(NIM) {
        this.state = "Berdiri";
        this.NIM = NIM;
    }
    
    ubahState(tombol) {
        let prevState = this.state;
        
        const transisi = {
            "Berdiri": { "TombolS": "Jongkok", "TombolW": "Terbang" },
            "Jongkok": { "TombolS": "Tengkurap", "TombolW": "Berdiri" },
            "Tengkurap": { "TombolW": "Jongkok" },
            "Terbang": { "TombolS": "Berdiri", "TombolX": "Jongkok" }
        };
        
        if (transisi[this.state] && transisi[this.state][tombol]) {
            this.state = transisi[this.state][tombol];
            this.cekKondisiSpesial(prevState);
        }
    }
    
    cekKondisiSpesial(prevState) {
        if (this.NIM % 3 === 0) {
            if (prevState === "Berdiri" && this.state === "Jongkok") console.log("Tombol arah bawah ditekan");
            if (prevState === "Jongkok" && this.state === "Berdiri") console.log("Tombol arah atas ditekan");
        } else if (this.NIM % 3 === 1) {
            if (this.state === "Berdiri") console.log("Posisi standby");
            if (this.state === "Tengkurap") console.log("Posisi istirahat");
        } else if (this.NIM % 3 === 2) {
            if (prevState === "Terbang" && this.state === "Jongkok") console.log("Posisi landing");
            if (prevState === "Berdiri" && this.state === "Terbang") console.log("Posisi take off");
        }
    }
}

// Simulasi perubahan state
let karakter = new PosisiKarakterGame(123456); // Gantilah dengan NIM Anda
karakter.ubahState("TombolS");
karakter.ubahState("TombolW");
karakter.ubahState("TombolS");
karakter.ubahState("TombolS");
karakter.ubahState("TombolX");
