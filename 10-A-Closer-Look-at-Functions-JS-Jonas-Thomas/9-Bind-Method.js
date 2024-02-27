"use strict";

const lufthansa = {
  airLine: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  //   book: function () {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.airLine} flight ${this.iataCode}`,
      name,
    });
  },
};

lufthansa.book(239, "Umair");
lufthansa.book(635, "Umair T.");
console.log(lufthansa);

const eurowings = {
  airLine: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(23, 'Ali');

// Call Method
book.call(eurowings, 23, "Sarah");
console.log(eurowings);

book.call(lufthansa, 239, "Mary");
console.log(lufthansa);

const swiss = {
  airLine: "Swiss Airlines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary");
console.log(swiss);

// Apply method
const flightData = [583, "George"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steve");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Umair");
bookEW23("Umar");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// partial applications

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
