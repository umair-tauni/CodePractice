"use strict";

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Steven");

greet("Hello")("Umair");

// Challenge - Arrow
const greetArr = (greeting) => (name) => {
  console.log(`${greeting} ${name}`);
};

greetArr("Hi")("Umair");
