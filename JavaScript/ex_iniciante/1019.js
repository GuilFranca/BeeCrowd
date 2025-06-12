// Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

// const prompt = require('prompt-sync')({sigint: true});

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
// lines.shift()

let totalSegundo = parseInt(lines.shift());

// Pegamos os segundos e dividimos pela quantidade de segundos que vale uma hora
let horas = Math.floor(totalSegundo / 3600);

// Pegamos o que resta do calculo da divisão da conversão de segundos para hora e dividimos por 60
let minutos = Math.floor((totalSegundo % 3600) / 60);

// Pegamos o resto dos segundos divididos por 60
let segundos = Math.floor(totalSegundo % 60);

console.log(`${horas}:${minutos}:${segundos}`)