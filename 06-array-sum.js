'use strict';
// Write a function that returns the sum of all numbers in an array.

// Example:

// Input: [1, 2, 3, 4]
// Output: 10

function arrSum(arr) {
  return arr.reduce((acc, val) => (acc += val), 0);
}

console.log(arrSum([1, 2, 3, 4]));
