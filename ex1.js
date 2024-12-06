// Exercício 1: Calculadora de Soma
// Solicite dois números ao usuário e calcule a soma deles. Use parseFloat() para converter a entrada do usuário de uma string para um número decimal, pois a função prompt() retorna uma string e precisamos de números para realizar operações matemáticas.

const prompt = require("prompt-sync")();

var num1 = parseFloat(prompt("Digite o primeiro número: "));
var num2 = parseFloat(prompt("Digite o seundo número: "));
var soma = num1 + num2;

console.log(`A soma dos números é ${soma}`);