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

// Promisifying
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log("1 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("2 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("3 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("4 second passed");
  });

// static method on Promise constructor
Promise.resolve("abc").then((res) => console.log(res));
Promise.reject(new Error("Problem!")).catch((err) => console.error(err));
