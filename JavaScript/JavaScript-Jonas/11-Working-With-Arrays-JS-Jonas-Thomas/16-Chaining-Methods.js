"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const eurToUsd = 1.1;

// PIPelINE
const totalDepositUSD = movements

  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);

// const totalDepositUSD = movements
//   .filter((mov) => mov < 0)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositUSD);

