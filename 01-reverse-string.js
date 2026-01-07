'use strict';
// Write a function that takes a string and returns it reversed.

// Example:
// Input: "hello"
// Output: "olleh"

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('hello'));
