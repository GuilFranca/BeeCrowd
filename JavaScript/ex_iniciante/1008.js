// Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

// const prompt = require('prompt-sync')({sigint: true});

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
// lines.shift()

let numeroFuncionario = parseInt(lines.shift());
let numeroHorasTrabalhadas = parseInt(lines.shift());
let valorHora = parseFloat(lines.shift());

let salario = (numeroHorasTrabalhadas * valorHora).toFixed(2)

console.log(`NUMBER = ${numeroFuncionario}`);
console.log(`SALARY = U$ ${salario}`);