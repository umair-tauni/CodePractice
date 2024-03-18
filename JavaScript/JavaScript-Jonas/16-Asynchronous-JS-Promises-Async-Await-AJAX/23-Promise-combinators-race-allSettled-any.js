"use strict";

const getJSON = async function (url, errorMsg = "Something went wrong") {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${errorMsg} (${response.status})`);
  }
  return await response.json();
};

// Promise.race
(async function () {
  const [res] = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/pakistan`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res.name);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error("Request took too long!"));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(0.1),
])
  .then((res) => console.log(res[0].name))
  .catch((err) => console.error(err));

//   Promise.allSettled
Promise.allSettled([
  Promise.resolve("success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
]).then((res) => console.log(res));

Promise.all([
  Promise.resolve("success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//   Promise.any [ES2021]
Promise.any([
    Promise.resolve("success"),
    Promise.reject("ERROR"),
    Promise.resolve("Another success"),
  ])
    .then((res) => console.log(res))
    .catch((err) => console.error(err));