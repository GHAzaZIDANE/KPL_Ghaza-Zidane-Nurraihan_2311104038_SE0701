const { akarKuadrat, kuadratLinear } = require('./aljabar');

try {
    const akar = akarKuadrat([1, -3, -10]);
    console.log("Akar-akar persamaan kuadrat:");
    console.log("x1 =", akar[0], ", x2 =", akar[1]);
} catch (e) {
    console.error(e.message);
}

const hasil = kuadratLinear([2, -3]);
console.log("\nHasil kuadrat persamaan linear:");
console.log(`${hasil[0]}x^2 ${hasil[1] >= 0 ? "+" : ""}${hasil[1]}x + ${hasil[2]}`);
