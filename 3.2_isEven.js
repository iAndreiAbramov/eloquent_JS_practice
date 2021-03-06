"use strict"

function isEven(num) {
  if (typeof num !== 'number' || num !== num || num === 0) return null;

  if (num % 2 === 0) return (`${num} is even`);
  return (`${num} is odd`);
}

console.log(isEven(50));
console.log(isEven(75));
// console.log(isEven(1));
// console.log(isEven(-6));