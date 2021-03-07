let elem = ' ';
let string;

for (let i = 8; i >= 1; i--) {
  string = '';
  for (let j = 8; j >= 1; j--) {
    string += elem;
    elem = (elem === ' ') ? '#' : ' ';
  }
  console.log(string);
  elem = (elem === ' ') ? '#' : ' ';
}