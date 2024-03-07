"use strict";

// Number.parseFloat(12);

const Person = function (firstName, birthYear) {
  //   console.log(this);
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   Never do this
  //   this.calcAge = function () {
  // console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// Static Method

Person.hey = function () {
  console.log("Hey there 👋");
  console.log(this);
};

Person.hey();
// jonas.hey();

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullNmae, birthyear) {
    this.fullNmae = fullNmae;
    this.birthyear = birthyear;
  }
  //   Methods will be added to .prototype property
  //   Instance Methods
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

  //   Static method
  static hey() {
    console.log("Hey there 👋");
    console.log(this);
  }
}

PersonCl.hey();
