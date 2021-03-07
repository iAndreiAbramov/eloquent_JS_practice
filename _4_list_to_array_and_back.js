'use strict'

const testList1 = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: {
        value: 4,
        rest: null,
      }
    }
  }
};

const arr = [];
function listToArray(list) {
  if (this.rest === null) {
    arr.push(this.value);
  } else {
    arr.push(listToArray(this.rest))
  }

  return arr;
}

console.log(listToArray(testList1));

