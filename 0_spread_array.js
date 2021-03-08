'use strict'

function arrSpread(arr) {
  if (!Array.isArray(arr)) return null;

  let result = [];

  function reducer(arr) {
    arr.reduce((arr, elem) => {
      if (!Array.isArray(elem)) {
        result.concat(elem);
      } else {
        result.concat(elem.reduce(reducer(arr, elem)));
      }
    });
  }

  result = reducer(arr);

  return result;
}

console.log(arrSpread([1, [1, 3, [0, 0, [1, 1, 1], 0], 4], 2, 3, [3, 4, 5, [5, 6, 7]]]));

console.log(arrSpread([1, [], 2, [0, 0, [9, [5, 5, 5], 9, 9], 0], 3, [3, 4, [1, 1, 1], 5, [5, 6, 7]]]));

