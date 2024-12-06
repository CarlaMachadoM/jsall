// Exercício 9: DESAFIO: Calculadora de Parcelas com Juros
// Solicite ao usuário o valor total da compra, o número de parcelas e a taxa de juros mensal. Calcule o valor de cada parcela, considerando a taxa de juros. Use parseFloat() para converter o valor total e a taxa de juros em números decimais, e parseInt() para o número de parcelas. Exiba o valor total, o número de parcelas, a taxa de juros e o valor de cada parcela.

const prompt = require("prompt-sync")();

let compras = parseFloat(prompt("Digite o valor total da sua compra: ")).toFixed(2);
let parcelas = parseInt(prompt("Em quantas parecelas você gostaria de pagar sua compra? "));
let juros = prompt("Digite o valor dos juros em %: ");
let valorFinal = compras * (1 + (juros/100) * parcelas)
let mensal = valorFinal/parcelas

console.log(`O valor total das suas compras é de ${compras}, dividido em ${parcelas} vezes, cada uma no valor de ${mensal}, com juros de ${juros}.`)

