"use strict";

const flight = "LH234";
const umair = {
  name: "Umair Tauni",
  passport: 3228133984,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 3228133984) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};

// checkIn(flight, umair);
// console.log(flight);
// console.log(umair);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(umair);
checkIn(flight, umair);
