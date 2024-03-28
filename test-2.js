const hitungAngka = (text) => {
  const resFix = [];

  let count = 1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i + 1]) {
      // Cek apakah huruf saat ini sama dengan huruf selanjutnya
      // Jika sama, maka increment count
      count++;
    } else {
      // Jika tidak sama, maka push object ke resFix
      resFix.push({
        [text[i]]: count,
      });
      count = 1;
    }
  }

  return resFix;
};

console.log(hitungAngka('aaabbcccaaaac'));
// Output: [ { a: 3 }, { b: 2 }, { c: 3 }, { a: 4 }, { c: 1 } ]

console.log(hitungAngka('bbbbzzzzzss'));
// Output: [ { b: 4 }, { z: 5 }, { s: 2 } ]

console.log(hitungAngka('abcde'));
// Output: [ { a: 1 }, { b: 1 }, { c: 1 }, { d: 1 }, { e: 1 } ]
