const CariTandaBilangan = require('./bilangan');

test('input negatif', () => {
  expect(CariTandaBilangan(-5)).toBe("Negatif");
});

test('input nol', () => {
  expect(CariTandaBilangan(0)).toBe("Nol");
});

test('input positif', () => {
  expect(CariTandaBilangan(7)).toBe("Positif");
  });