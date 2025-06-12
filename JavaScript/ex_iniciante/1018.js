// Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

// const prompt = require('prompt-sync')({sigint: true});

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
// lines.shift()

let valor = parseInt(lines.shift());
let original = valor;

// divisão inteira do valor de 100
let cedula100 = Math.floor(valor / 100);
// transforma o valor como sendo o valor restante do que sobro após as notas de 100
valor %= 100;

let cedula50 = Math.floor(valor / 50);
valor %= 50;

let cedula20 = Math.floor(valor / 20);
valor %= 20;

let cedula10 = Math.floor(valor / 10);
valor %= 10;

let cedula5 = Math.floor(valor / 5);
valor %= 5;

let cedula2 = Math.floor(valor / 2);
valor %= 2;

let cedula1 = valor;

console.log(original);
console.log(`${cedula100} nota(s) de R$ 100,00`);
console.log(`${cedula50} nota(s) de R$ 50,00`);
console.log(`${cedula20} nota(s) de R$ 20,00`);
console.log(`${cedula10} nota(s) de R$ 10,00`);
console.log(`${cedula5} nota(s) de R$ 5,00`);
console.log(`${cedula2} nota(s) de R$ 2,00`);
console.log(`${cedula1} nota(s) de R$ 1,00`);
