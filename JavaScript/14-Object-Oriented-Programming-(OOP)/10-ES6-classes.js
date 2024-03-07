"use strict";

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(firstName, birthyear) {
    this.firstName = firstName;
    this.birthyear = birthyear;
  }
  //   Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthyear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are NOT hoisted
//  Function declaraions are hoisted, means we can use them before they are declared in the code.

// 2. classes are First-class citizens. We can pass them into functions and also return them from functions. classes are special type of functions behind the scenes.

// 3. Classes are executed in strict mode