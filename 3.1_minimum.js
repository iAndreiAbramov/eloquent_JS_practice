'use strict'

// Задачка - вернуть минимальное значение из 2-х аргументов
function minimum(a = 0, b = 0) {
  if (a === b) return null;
  return (a > b) ? b : a;
}

console.log(minimum(3, 4));
console.log(minimum(-1, 4));
console.log(minimum(0, 0));
