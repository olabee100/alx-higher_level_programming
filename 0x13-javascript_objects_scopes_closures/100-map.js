#!/usr/bin/node

const list = require('./100-data').list;

// Use the map method to create a new array with each value multiplied by its index
const newList = list.map((value, index) => value * index);

// Print both the initial list and the new list
console.log(list);
console.log(newList);

