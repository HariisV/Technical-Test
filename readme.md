# Technical Test

## Soal 1
-> Mencari bilangan ganjil dari array yang diberikan, kemudian di sort berdasarkan angka terbesar.

```js
  const cariGanjil = (num) => {
    const oddNum = num.filter((n) => n % 2 !== 0);  // Filter angka ganjil
    oddNum.sort((a, b) => b - a);  // Sort angka ganjil dari besar ke kecil
    return oddNum; // mengembalikan angka ganjil yang sudah di sort
  }

  console.log(cariGanjil([2, 4, 6, 5, 3, 1, 7, 9, 10, 8]));
  // return [ 9, 7, 5, 3, 1 ]

  console.log(cariGanjil([9, 1, 2, 3, 5, 8]));
  // return [ 9, 5, 3, 1 ]

  console.log(cariGanjil([5, 7, 4, 3, 2, 9]));
  // return [ 9, 7, 5, 3 ]
```
### Screenshot
![screenshot](https://raw.githubusercontent.com/HariisV/Technical-Test/main/image/test-1.png)

## Soal 2
-> menghitung berapa jumlah huruf yang berurutan dari text yang diberikan

```js
const hitungAngka = (text) => {
  const resFix = [];

  let count = 1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i + 1]) { // Mengecek apakah huruf saat ini sama dengan huruf selanjutnya
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
```
### Screenshot
![screenshot](https://raw.githubusercontent.com/HariisV/Technical-Test/main/image/test-2.png)

## Soal 3
-> Mendapatkan total transaksi setiap user, kemudian di kelompokkan berdasarkan customer_id, setelah itu data di sort berdasarkan transaksi terbanyak.

### Implementasi Javascript
```js
const hitungDanKelompokkan = (data) => {
  const result = [];

  data?.forEach((d) => {
    //Melakukan perulangan untuk setiap data
    if (result.find((r) => r.Customer_ID === d.Customer_ID)) { // Cek apakah Customer_ID sudah ada di result
      result.find((r) => r.Customer_ID === d.Customer_ID).count++; 
      // Jika sudah ada, maka increment count
    } else {
      // Jika belum ada, maka push object baru ke result
      result.push({
        Customer_ID: d.Customer_ID,
        count: 1,
      });
    }
  });

  result.sort((a, b) => b.count - a.count);
  return result;
};

const data = [
  { ID: 1, Customer_ID: '21', Transaction_Date: '7/30/2019' },
  { ID: 2, Customer_ID: '15', Transaction_Date: '7/21/2019' },
  { ID: 3, Customer_ID: '16', Transaction_Date: '7/18/2019' },
  { ID: 4, Customer_ID: '20', Transaction_Date: '7/22/2019' },
  { ID: 5, Customer_ID: '15', Transaction_Date: '7/15/2019' },
  { ID: 6, Customer_ID: '20', Transaction_Date: '7/12/2019' },
  { ID: 7, Customer_ID: '15', Transaction_Date: '7/21/2019' },
  { ID: 8, Customer_ID: '20', Transaction_Date: '7/12/2019' },
];

console.log(hitungDanKelompokkan(data));

// Output: [
//   { Customer_ID: '15', count: 3 },
//   { Customer_ID: '20', count: 3 },
//   { Customer_ID: '21', count: 1 },
//   { Customer_ID: '16', count: 1 }
// ]
```

### Implementasi SQL
```sql
SELECT Customer_ID, COUNT(*) AS TotalPenjualan
FROM Transaksi
GROUP BY Customer_ID
ORDER BY TotalPenjualan DESC;
```

### Screenshot
![screenshot](https://raw.githubusercontent.com/HariisV/Technical-Test/main/image/test-3.png)
