'use strict';
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

function checkPalindrome(str) {
  let count = 0;
  for (let i = 0, j = str.length - 1; i < str.length, j >= 0; i++, j--) {
    if (str[i] === str[j]) {
      count++;
    }
  }

  if (count === str.length) return true;
  return false;
}

console.log(checkPalindrome('madam'));
console.log(checkPalindrome('hello'));
