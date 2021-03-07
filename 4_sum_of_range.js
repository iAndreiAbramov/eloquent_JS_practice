'use strict'

function range(start, end, step = 1) {
  const result = [];

  for (let i = 0; i <= end - start; i += step) {
    result.push(start + i);
  }
  return result;
}

console.log(range(1, 10, 2));
console.log(range(-10, 10, 2));
console.log(range(0, 0, 2));

function sum(arr) {
  return arr.reduce((sum, cur) => sum += cur, 0);
}