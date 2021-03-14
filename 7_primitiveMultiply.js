// 'use strict';

// class MultiplicatorUnitFailure extends Error {};

// function primitiveMultiply(a, b) {
//   let c;
//   if (c = Math.random() < 0.5)
//     return a * b;
//   else
//     throw new MultiplicatorUnitFailure('Обибка');
// }

// function reliableMultiply(a, b) {
//   try {
//     return primitiveMultiply(a, b);
//   } catch(e) {
//     return reliableMultiply(a, b);
//   }
// }

// → 64

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure))
        throw e;
    }
  }
}

console.log(reliableMultiply(8, 8));
console.log(reliableMultiply(8, 8));
console.log(reliableMultiply(8, 8));
console.log(reliableMultiply(8, 8));
console.log(reliableMultiply(8, 8));
console.log(reliableMultiply(8, 8));