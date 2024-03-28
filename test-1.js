const cariGanjil = (num) => {
  // Filter angka ganjil
  const oddNum = num.filter((n) => n % 2 !== 0);

  // Sort angka ganjil dari besar ke kecil
  oddNum.sort((a, b) => b - a);

  // kembalikan angka ganjil yang sudah di sort
  return oddNum;
};

console.log(cariGanjil([2, 4, 6, 5, 3, 1, 7, 9, 10, 8]));
// return [ 9, 7, 5, 3, 1 ]

console.log(cariGanjil([9, 1, 2, 3, 5, 8]));
// return [ 9, 5, 3, 1 ]

console.log(cariGanjil([5, 7, 4, 3, 2, 9]));
// return [ 9, 7, 5, 3 ]
