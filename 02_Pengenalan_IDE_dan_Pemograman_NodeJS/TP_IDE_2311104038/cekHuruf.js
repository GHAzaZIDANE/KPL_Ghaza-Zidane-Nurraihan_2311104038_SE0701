const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Masukkan satu huruf: ', (huruf) => {
  huruf = huruf.toUpperCase();

  if (["A", "I", "U", "E", "O"].includes(huruf)) {
    console.log(`Huruf ${huruf} merupakan huruf vokal`);
  } else {
    console.log(`Huruf ${huruf} merupakan huruf konsonan`);
  }

  let bilanganGenap = [2, 4, 6, 8, 10];
  for (let i = 0; i < bilanganGenap.length; i++) {
    console.log(`Angka genap ${i + 1} : ${bilanganGenap[i]}`);
  }

  readline.close();
});
