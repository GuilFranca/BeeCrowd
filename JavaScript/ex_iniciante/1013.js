// Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

// Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

// const prompt = require('prompt-sync')({sigint: true});

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
// lines.shift()

// "7", "14", "106"
let valoresInsercao = lines.shift().split(' ');

// console.log(valoresInsercao);

let maiorValor = null;

for (const valor of valoresInsercao) {

    if (parseInt(valor) > maiorValor) {
        maiorValor = valor;
    }

}

console.log(`${maiorValor} eh o maior`);