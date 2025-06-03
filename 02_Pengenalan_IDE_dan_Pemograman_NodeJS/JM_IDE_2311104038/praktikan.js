
let nama = "Budi"; 
console.log("Masukkan nama Anda:");
console.log("Selamat datang, " + nama + "!\n");


console.log("Output array:");
for (let i = 0; i < 50; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    console.log(i + " #$#$");
  } else if (i % 2 === 0) {
    console.log(i + " ##");
  } else if (i % 3 === 0) {
    console.log(i + " $$");
  } else {
    console.log(i);
  }
}

let nilai = 531; 
console.log("\nMasukkan angka antara 1 sampai 10000:");
console.log("Angka yang dimasukkan:", nilai);


function isPrima(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

if (isPrima(nilai)) {
  console.log("Angka " + nilai + " merupakan bilangan prima");
} else {
  console.log("Angka " + nilai + " bukan merupakan bilangan prima");
}
