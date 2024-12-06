// Exercício 6: Calculadora de Desconto
// Solicite ao usuário o nome do produto, o preço original e a porcentagem de desconto. Calcule o valor do desconto e o preço final após o desconto. Use parseFloat() para converter o preço e a porcentagem em números decimais. Exiba o nome do produto, o preço original, o valor do desconto e o preço final.

const prompt = require("prompt-sync")();

let produto = prompt("Digite o nome do produto: ");
let preco = parseFloat(prompt("Digite o valor do produto: ")).toFixed(2);
let desc = parseFloat(prompt("Digite o desconto a ser aplicado: "));
let final = preco - desc/100

console.log(`O produto ${produto} de valor ${preco} com ${desc}% de desconto fica com o valor final de ${final}.`)