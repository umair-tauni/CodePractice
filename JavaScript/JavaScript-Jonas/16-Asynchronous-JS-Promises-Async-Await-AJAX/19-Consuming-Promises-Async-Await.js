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

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  // Geolocation
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  //   Reverse geocoding
  const resGe0 = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGe0.json();
  console.log(dataGeo);

  //   Country data
  //   fetch(`https://restcountries.com/v3.1/name/${country}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

  const res = await fetch(
    `https://restcountries.com/v3.1/name/${dataGeo.country}`
  );
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
};

whereAmI();
console.log("FIRST");
