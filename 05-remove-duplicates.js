'use strict';
// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

function removeDuplicate(arr) {
  return arr.reduce((acc, val, i, arr) => {
    if (arr[i] === arr[i + 1] && i !== arr.length - 1) return acc;

    acc.push(arr[i]);

    return acc;
  }, []);
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4]));
