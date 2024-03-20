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
