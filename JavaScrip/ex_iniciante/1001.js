var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

let soma = A + B;

console.log(`X = ${soma}`);