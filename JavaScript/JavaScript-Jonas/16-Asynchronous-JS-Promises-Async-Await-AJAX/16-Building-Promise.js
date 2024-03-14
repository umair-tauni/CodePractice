"use strict";

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery Draw is happening 🔮");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You win 💰");
    } else {
      reject(new Error("You lost your money 💩"));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
