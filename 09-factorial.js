'use strict';
// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120

function fact(num) {
  if (num === 0) return 1;

  return num * fact(num - 1);
}

console.log(fact(5));
