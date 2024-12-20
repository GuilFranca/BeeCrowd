var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numero_1 = parseInt(lines.shift());
let numero_2 = parseInt(lines.shift());

soma = numero_1 + numero_2;

console.log(`SOMA = ${soma}`);