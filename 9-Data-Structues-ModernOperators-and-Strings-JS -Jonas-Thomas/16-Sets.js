'use strict';

const ordersSet = new Set(['pasta', 'pizza', 'pizza', 'risotto', 'pasta', 'pizza']);
console.log(ordersSet);

console.log(new Set('Umair'));

console.log(ordersSet.size);

console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('bread'));

ordersSet.add('garlic bread');
ordersSet.add('garlic bread');
console.log(ordersSet);

ordersSet.delete('risotto');
console.log(ordersSet);

// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) {
    console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

console.log(new Set('umairtauni').size);
