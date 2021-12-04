const { A, B } = require('./functions.js');
const fileReader = require('../fileReader.js');

const input = fileReader('./day2/input.txt');

console.log('----- Running Solution A -----');
console.log(A(input));
console.log('----- Running Solution B -----');
console.log(B(input));