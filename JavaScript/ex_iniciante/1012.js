// Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
// a) a área do triângulo retângulo que tem A por base e C por altura.
// b) a área do círculo de raio C. (pi = 3.14159)
// c) a área do trapézio que tem A e B por bases e C por altura.
// d) a área do quadrado que tem lado B.
// e) a área do retângulo que tem lados A e B.

// const prompt = require('prompt-sync')({sigint: true});

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
// lines.shift()

// Função split para separar em arrays a cada espaço
let valoresInsercao = lines.shift().split(' ');

// Tira o primeiro array da lista e transfere para a variável
let valorA = parseFloat(valoresInsercao.shift());
let valorB = parseFloat(valoresInsercao.shift());
let valorC = parseFloat(valoresInsercao.shift());

function areaTrianguloRetangulo(base, altura) {
    let area = ((base * altura) / 2).toFixed(3);
    return area; 
}

function areaCirculo(raio) {
    let pi = 3.14159;
    let area = (pi * Math.pow(raio,2)).toFixed(3);
    return area;
}

function areaTrapezio(baseMenor, baseMaior, altura) {
    let area = (((baseMenor + baseMaior) * altura) / 2).toFixed(3);
    return area;
}

function areaQuadrado(lado) {
    let area = (lado * lado).toFixed(3);
    return area;
}

function areaRetangulo(altura, base) {
    let area = (altura * base).toFixed(3);
    return area;
}

console.log(`TRIANGULO: ${areaTrianguloRetangulo(valorA, valorC)}`);
console.log(`CIRCULO: ${areaCirculo(valorC)}`);
console.log(`TRAPEZIO: ${areaTrapezio(valorA, valorB, valorC)}`);
console.log(`QUADRADO: ${areaQuadrado(valorB)}`);
console.log(`RETANGULO: ${areaRetangulo(valorA, valorB)}`);