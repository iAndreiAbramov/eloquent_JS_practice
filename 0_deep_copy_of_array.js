'use strict'

const inititalArr = [1, 2, 3, [1, [1, [4, [5]], 2]]];

function copyOffArr(arr) {

  return arr.reduce((copy, elem) => {
    if (!Array.isArray(elem)) {
      copy = copy.concat(elem);
      return copy;
    }
    copy = copy.concat([copyOffArr(elem)]);
    return copy;
  }, []);
}


const newArr = copyOffArr(inititalArr);
console.log(newArr);