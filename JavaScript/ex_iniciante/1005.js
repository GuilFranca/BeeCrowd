// const prompt = require('prompt-sync')({sigint: true});

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
// lines.shift()

let valor1 = parseFloat(lines.shift());
valor1 *= 3.5;

let valor2 = parseFloat(lines.shift());
valor2 *= 7.5;

let media = (valor1 + valor2) / (3.5 + 7.5);

console.log(`MEDIA = ${media.toFixed(5)}`);
