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
const flightData = [583, 'George'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);