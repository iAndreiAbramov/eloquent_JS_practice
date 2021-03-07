'use strict'

function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

function reverseArrayInPlace(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  arr = reversedArr.concat();
  return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]))