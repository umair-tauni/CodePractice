////////////////////////////////////////
// exporting and Inmporting in ES6 Modules
// Importing module
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

// import { addToCart } from "./shoppingCart";

console.log("Importing module");
// console.log(shippingCost);

// addToCart("bread", 5);

// console.log(price, tq);

// import shoppingCart, * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("bread", 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

// import add from "./shoppingCart.js";
// add("pizza", 2);

import { addToCart, cart } from "./shoppingCart.js";
addToCart("pizza", 2);
addToCart("bread", 5);
addToCart("apples", 4);

console.log(cart);

/*
// Top level await
console.log("----------Top level await----------------");

// console.log("Start fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);

// console.log("Something");

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// not very clean
lastPost.then((last) first=> console.log(last));

// use top level await
const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

console.log("---------------Module Pattern-------------------");
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart("apple", 4);
ShoppingCart2.addToCart("pizza", 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/

console.log("---------Common JS Module----------");
/*
// Export

export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
  );
};

// Import
const { addToCart } = require('./shoppingCart.js');
*/

console.log("-----------------Intoduction to NPM------------");

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";
// import cloneDeep from "lodash";

const state = {
  cart: [
    { prouct: "bread", quantity: 5 },
    { prouct: "pizza", quantity: 5 },
  ],
  user: {
    loggedIn: true,
  },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

console.log("--------Building with Parcel and NPM scripts----------");

if (module.hot) {
  module.hot.accept();
}
