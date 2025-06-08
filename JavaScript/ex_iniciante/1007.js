// Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

// const prompt = require('prompt-sync')({sigint: true});

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
// lines.shift()

let valorA = parseInt(lines.shift());
let valorB = parseInt(lines.shift());
let valorC = parseInt(lines.shift());
let valorD = parseInt(lines.shift());

let diferenca = (valorA * valorB - valorC * valorD);

console.log(`DIFERENCA = ${diferenca}`);