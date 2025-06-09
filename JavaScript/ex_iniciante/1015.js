// Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais, segundo a fórmula:

// const prompt = require('prompt-sync')({sigint: true});

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
// lines.shift()

let posicao1 =lines.shift().split(' ');
let x1 = parseFloat(posicao1.shift()).toFixed(1);
let y1 = parseFloat(posicao1.shift()).toFixed(1);

let posicao2 =lines.shift().split(' ');
let x2 = parseFloat(posicao2.shift()).toFixed(1);
let y2 = parseFloat(posicao2.shift()).toFixed(1);


let diferencaDistancia = Math.sqrt((Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))).toFixed(4)

console.log(diferencaDistancia);