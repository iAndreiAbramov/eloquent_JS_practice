'use strict'

function arrSpread(arr) {
  if (!Array.isArray(arr)) return null;

  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result = result.concat(arr[i]);
    } else {
      result = result.concat(...arr[i]);
    }
  }

  return result;
}

console.log(arrSpread([1, [1, 3, [0, 0, [1, 1, 1], 0], 4], 2, 3, [3, 4, 5, [5, 6, 7]]]));