function CariNilaiPangkat(a, b) {
  if (b === 0) return 1;
  if (b < 0) return -1;
  if (b > 10 || a > 100) return -2;

  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
    if (result > Number.MAX_SAFE_INTEGER) return -3;
  }
  return result;
}

// Unit Test Manual
function testCariNilaiPangkat() {
  console.assert(CariNilaiPangkat(2, 3) === 8, "Test 1 gagal");
  console.assert(CariNilaiPangkat(0, 0) === 1, "Test 2 gagal");
  console.assert(CariNilaiPangkat(3, -2) === -1, "Test 3 gagal");
  console.assert(CariNilaiPangkat(101, 2) === -2, "Test 4 gagal");
  console.assert(CariNilaiPangkat(2, 11) === -2, "Test 5 gagal");
  console.assert(CariNilaiPangkat(999999, 99999) === -3, "Test 6 gagal");
  console.log("Semua unit test selesai.");
}

testCariNilaiPangkat();
