// Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio (R). A fórmula para calcular o volume é: (4/3) * pi * R³. Considere (atribua) para pi o valor 3.14159.

// Dica: Ao utilizar a fórmula, procure usar (4/3.0) ou (4.0/3), pois algumas linguagens (dentre elas o C++), assumem que o resultado da divisão entre dois inteiros é outro inteiro.

// const prompt = require('prompt-sync')({sigint: true});

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
// lines.shift()

let pi = 3.14159;
let R = parseFloat(lines.shift());
let volume = ((4 / 3.0) * pi * Math.pow(R,3)).toFixed(3);

console.log(`VOLUME = ${volume}`);