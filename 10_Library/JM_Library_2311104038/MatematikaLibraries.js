const MatematikaLibraries = {
  FPB: function(input1, input2) {
   
    while(input2 !== 0) {
      const temp = input2;
      input2 = input1 % input2;
      input1 = temp;
    }
    return Math.abs(input1);
  },

  KPK: function(input1, input2) {
    return Math.abs((input1 * input2) / this.FPB(input1, input2));
  },

  Turunan: function(persamaan) {
    let hasil = [];

    for(let i = 0; i < n; i++) {
      const koef = persamaan[i] * (n - i);
      if (koef === 0) continue;

      let bagian = '';
      if (koef > 0 && hasil.length > 0) bagian += ' + ';
      else if (koef < 0) bagian += ' - ';

      const absKoef = Math.abs(koef);
      if(absKoef !== 1) bagian += absKoef;

      const pangkat = n - i - 1;
      if (pangkat > 1) bagian += `x${pangkat}`;
      else if (pangkat === 1) bagian += 'x';

      hasil.push(bagian.trim());
    }

   
    let strHasil = hasil.join('');
    strHasil = strHasil.replace(/^\+ /, ''); 
    strHasil = strHasil.replace(/^\- /, '-'); 
    return strHasil || '0';
  },

  Integral: function(persamaan) {
   
    const n = persamaan.length;
    let hasil = [];

    for(let i = 0; i < n; i++) {
      const pangkatBaru = n - i;
      const koef = persamaan[i] / pangkatBaru;
      if (koef === 0) continue;

      let bagian = '';
      if (koef > 0 && hasil.length > 0) bagian += ' + ';
      else if (koef < 0) bagian += ' - ';

      const absKoef = Math.abs(koef);
      if(absKoef !== 1) bagian += absKoef;

      if (pangkatBaru > 1) bagian += `x${pangkatBaru}`;
      else bagian += 'x';

      hasil.push(bagian.trim());
    }

    let strHasil = hasil.join('');
    strHasil = strHasil.replace(/^\+ /, '');
    strHasil = strHasil.replace(/^\- /, '-');
    strHasil += ' + C';
    return strHasil || 'C';
  }
};

export default MatematikaLibraries;
