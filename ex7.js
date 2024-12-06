// Exercício 7: Calculadora de Parcelas sem juros
// Solicite ao usuário o valor total de uma compra e o número de parcelas. Calcule o valor de cada parcela, considerando que não há juros. Use parseFloat() para converter o valor total e parseInt() para o número de parcelas. Exiba o valor total, o número de parcelas e o valor de cada parcela.

const prompt = require("prompt-sync")();

let compras = parseFloat(prompt("Digite o valor da sua compra: "));
let parcelas = parseInt(prompt("Digite o número de parcelas para dividir o valor da compra: "));
let mensal = parseFloat(compras) / parseInt(parcelas);
console.log(`Sua compra tem um valor total de: ${compras}, dividida em ${parcelas} vezes, cada parcela tendo o valor de: ${mensal}.`)
