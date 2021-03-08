'use strict';

const testArr1 = [
  [1, 2, 3],
  [3, 4, 5],
  [5, 6, 7]
];

function rollUpArray(arr) {
  return arr.reduce((sum, cur) => sum.concat(cur));
}

console.log(rollUpArray(testArr1));