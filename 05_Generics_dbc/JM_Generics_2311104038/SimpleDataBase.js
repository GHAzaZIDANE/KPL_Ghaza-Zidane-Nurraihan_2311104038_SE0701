class Penjumlahan {
    static jumlahTigaAngka(a, b, c) {
        return Number(a) + Number(b) + Number(c);
    }
}

const nim = 12345678;
const lastDigit = nim % 10;

let num1, num2, num3;
if (lastDigit === 1 || lastDigit === 2) {
    num1 = 12.0; num2 = 34.0; num3 = 56.0;
} else if (lastDigit === 3 || lastDigit === 4 || lastDigit === 5) {
    num1 = 12.0; num2 = 34.0; num3 = 56.0;
} else if (lastDigit === 6 || lastDigit === 7 || lastDigit === 8) {
    num1 = 12; num2 = 34; num3 = 56;
} else {
    num1 = 12n; num2 = 34n; num3 = 56n;
}

console.log("Hasil:", Penjumlahan.jumlahTigaAngka(num1, num2, num3));

class SimpleDataBase {
    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }
    
    addNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date());
    }
    
    printAllData() {
        this.storedData.forEach((data, index) => {
            console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index].toUTCString()}`);
        });
    }
}

// Contoh penggunaan
const db = new SimpleDataBase();
db.addNewData(num1);
db.addNewData(num2);
db.addNewData(num3);
db.printAllData();

class HaloGeneric {
    static sapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}


