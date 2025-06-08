// Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

// const prompt = require('prompt-sync')({sigint: true});

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
// lines.shift()

let nomeVendedor = lines.shift();
let salarioFixo = parseFloat(lines.shift());
let vendasEfetuadas = parseFloat(lines.shift());

let porcentagemComissao = 0.15;

let total = (salarioFixo + vendasEfetuadas * porcentagemComissao).toFixed(2);

console.log(`TOTAL = R$ ${total}`);