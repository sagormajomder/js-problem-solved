// Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9

'use strict';

function findMaxNumber(arr) {
  return arr.reduce((acc, val) => (val > acc ? val : acc), 0);
}

console.log(findMaxNumber([5, 1, 9, 3]));
