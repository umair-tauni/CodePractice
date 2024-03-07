"use strict";

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullNmae, birthyear) {
    this.fullNmae = fullNmae;
    this.birthyear = birthyear;
  }
  //   Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthyear);
  }

  greet() {
    console.log(`Hey ${this.fullNmae}`);
  }

  get age() {
    return 2037 - this.birthyear;
  }

  // Set a property that already exists
  set fullNmae(name) {
    console.log(name);
    if (name.includes(" ")) this._fullNmae = name;
    else console.log(`${name} is not a full name!`);
  }

  get fullNmae() {
    return this._fullNmae;
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are NOT hoisted
//  Function declaraions are hoisted, means we can use them before they are declared in the code.

// 2. classes are First-class citizens. We can pass them into functions and also return them from functions. classes are special type of functions behind the scenes.

// 3. Classes are executed in strict mode

// const walter = new PersonCl("walter", 1965)
const walter = new PersonCl("walter white", 1965);

const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);
console.log(account.latest);
