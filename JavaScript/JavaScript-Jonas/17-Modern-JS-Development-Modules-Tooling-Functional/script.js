// Importing module
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

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
lastPost.then((last) => console.log(last));

// use top level await
const lastPost2 = await getLastPost();
console.log(lastPost2);
