// Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).

// const prompt = require('prompt-sync')({sigint: true});

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
// lines.shift()

let distanciaTotal = parseInt(lines.shift())
let combustivelKM = parseFloat(lines.shift()).toFixed(1);

let combustivelGasto = (distanciaTotal / combustivelKM).toFixed(3);

console.log(`${combustivelGasto} km/l`);
