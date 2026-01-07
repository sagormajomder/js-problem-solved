'use strict';
// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"

function capitalizeLetter(str) {
  return str
    .split(' ')
    .map(val => val[0].toUpperCase() + val.slice(1))
    .join(' ');
}

console.log(capitalizeLetter('hello world'));
