'use strict'

function arrSpread(arr) {
  if (!Array.isArray(arr)) return null;

  let result = [];
  
  for (let i = 0; i <= arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result = result.push(arr[i]);
    } else {
      result = result.concat(result, ...arr[i]);
    }
  }

  return result;
}

console.log(arrSpread([1, 2, 3, [3, 4, 5, [5, 6, 7]]]));