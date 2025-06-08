// Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

// const prompt = require('prompt-sync')({sigint: true});

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
// lines.shift()

class Peca {

    constructor(codigo, numero, valor) {

        if (typeof valor !== 'number') {
            throw new TypeError('valor deve ser um número!');
        }
        if (typeof numero !== 'number') {
            throw new TypeError('numero deve ser um número!');
        }

        this.codigo = codigo;
        this.numero = numero;
        this.valor = valor;
    }

    setCodigo(codigo) {
        this.codigo = codigo;
    }

    setNumero(numero) {
        this.numero = numero;
    }

    setValor(valor) {

        if (typeof valor !== 'number') {
            throw new TypeError('valor deve ser um número!');
        }

        this.valor = valor;
    }

    getCodigo() {
        return this.codigo;
    }

    getNumero() {
        return this.numero;
    }

    getValor() {
        return this.valor;
    }

}

// [12 1 5.30]
// A funão split(" ") vai separar em arrays onde tem espaço
let totalValores1 = lines.shift().split(" ");
let totalValores2 = lines.shift().split(" ");


// ["12", "1", "5.30"]
// shift remove o primeiro valor de uma array e retorna a mesma
let codigo1 = totalValores1.shift();
let numero1 = parseInt(totalValores1.shift());
let valor1 = parseFloat(totalValores1.shift());

let codigo2 = totalValores2.shift();
let numero2 = parseInt(totalValores2.shift());
let valor2 = parseFloat(totalValores2.shift());

const peca1 = new Peca(codigo1,numero1,valor1);
const peca2 = new Peca(codigo2,numero2,valor2);

let carrinho = (peca1.getNumero() * peca1.getValor()) + (peca2.getNumero() * peca2.getValor()); 

console.log(`VALOR A PAGAR: R$ ${carrinho.toFixed(2)}`);
