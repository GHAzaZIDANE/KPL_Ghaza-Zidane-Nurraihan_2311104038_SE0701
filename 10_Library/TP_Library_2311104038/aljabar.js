
function akarKuadrat([a, b, c]) {
    const D = b * b - 4 * a * c;

    if (D < 0) {
        throw new Error("Tidak ada akar real (diskriminan < 0)");
    }

    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);

    return [x1, x2];
}

function kuadratLinear([a, b]) {
    const A = a * a;
    const B = 2 * a * b;
    const C = b * b;

    return [A, B, C];
}

module.exports = {
    akarKuadrat,
    kuadratLinear
};
