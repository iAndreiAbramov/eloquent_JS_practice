"use strict"

function countBS(string, char) {
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) counter++;
  }
  return counter;
}

console.log(countBS('fkjkhksdkjsdkjhfhf', 'f'));