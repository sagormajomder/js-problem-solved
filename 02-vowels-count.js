'use strict';
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3

function countVowels(str) {
  return str.split('').reduce((acc, val) => {
    const letter = val.toLowerCase();
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    )
      return (acc = acc + 1);

    return acc;
  }, 0);
}
console.log(countVowels('programming'));
