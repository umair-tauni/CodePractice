"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `<article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${
          data?.languages[Object.keys(data?.languages)[0]]
        }</p>
        <p class="country__row"><span>💰</span>${
          data?.currencies[Object.keys(data?.currencies)[0]]?.name
        }</p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position),
//   (err) => console.log(err)
// );

// console.log("Getting position");

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then((pos) => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then((pos) => {
      console.log(pos.coords);
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Problem with geococding ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Country not found ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      renderCountry(data[0]).catch((err) => console.error(`${err.message} 🔥`));
    });
};

btn.addEventListener("click", whereAmI);
