'use strict';
// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

function arrEven(arr) {
  return arr.reduce((acc, val) => {
    if (val % 2 === 0) {
      acc.push(val);
    }

    return acc;
  }, []);
}

console.log(arrEven([1, 2, 3, 4, 5, 6]));
