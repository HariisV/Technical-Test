const hitungDanKelompokkan = (data) => {
  const result = [];

  data?.forEach((d) => {
    //Melakukan perulangan untuk setiap data
    if (result.find((r) => r.Customer_ID === d.Customer_ID)) {
      // Cek apakah Customer_ID sudah ada di result
      result.find((r) => r.Customer_ID === d.Customer_ID).count++; // Jika sudah ada, maka increment count
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
