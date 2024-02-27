"use strict";

// Split and join
console.log("a+very+nice+string".split("+"));
console.log("Umair Tauni".split(" "));

const [firstName, lastName] = "Umair Tauni".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("Umair Tauni");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(15, "+").padEnd(20, "+"));
console.log("Umair".padStart(25, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(12345678));
console.log(maskCreditCard("1111111111111"));
console.log(maskCreditCard("ndendkn33dd44"));

// Repeat
const message2 = "Bad wx....... Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesInLine(5);
planesInLine(7);
