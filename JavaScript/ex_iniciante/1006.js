// Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

// const prompt = require('prompt-sync')({sigint: true});

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
// lines.shift()

let pesoA = 2;
let pesoB = 3;
let pesoC = 5;

let notaA = parseFloat(lines.shift());
notaA *= pesoA;

let notaB = parseFloat(lines.shift());
notaB *= pesoB;

let notaC = parseFloat(lines.shift());
notaC *= pesoC;

let media = (notaA + notaB + notaC) / (pesoA + pesoB + pesoC)

console.log(`MEDIA = ${media.toFixed(1)}`);