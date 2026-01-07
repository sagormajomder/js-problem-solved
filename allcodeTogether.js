'use strict';
// 1. Write a function that takes a string and returns it reversed.

// Example:
// Input: "hello"
// Output: "olleh"

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('hello'));

//2. Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

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

//3. Write a function that checks if a string is a palindrome (reads the same forward and backward).

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

//4. Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9

function findMaxNumber(arr) {
  return arr.reduce((acc, val) => (val > acc ? val : acc), 0);
}

console.log(findMaxNumber([5, 1, 9, 3]));

//5. Write a function that removes all duplicate numbers from an array.

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

//6. Write a function that returns the sum of all numbers in an array.

// Example:

// Input: [1, 2, 3, 4]
// Output: 10

function arrSum(arr) {
  return arr.reduce((acc, val) => (acc += val), 0);
}

console.log(arrSum([1, 2, 3, 4]));

//7. Write a function that returns all even numbers from a given array.

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

//8. Write a function that capitalizes the first letter of each word in a string.

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

//9. Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120

function fact(num) {
  if (num === 0) return 1;

  return num * fact(num - 1);
}

console.log(fact(5));

//10. Write a function that prints numbers from 1 to 20.

// Example:

// For multiples of 3, print "Ping"
// For multiples of 5, print "Pong"
// For multiples of both 3 and 5, print "PingPong"
// If the number is not a multiple of 3 or 5, print the number itself
// Example Output:

// 1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..

('use strict');

function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('PingPong');
    else if (i % 3 === 0) console.log('Ping');
    else if (i % 5 === 0) console.log('Pong');
    else console.log(i);
  }
}
pingPong();
