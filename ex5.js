// Exercício 5: Cadastro de Produto e Cálculo de Valor Total
// Solicite ao usuário o nome do produto, o preço unitário, a quantidade comprada e calcule o valor total da compra incluindo um imposto de 18%. Use parseFloat() para converter o preço e a quantidade em números decimais. Exiba o nome do produto, o preço unitário, a quantidade, o imposto total, e o valor total da compra (preço total mais imposto).

const prompt = require("prompt-sync")();

let produto = prompt("Digite o nome do produto: ");
let preco = parseFloat(prompt("Digite o preço do produto: ")).toFixed(2);
let quant = parseFloat(prompt("Digite a quantidade de produtos comprada: "));

let valor = (parseFloat(preco) * parseFloat(quant))+ 18/100;
console.log(`O produto ${produto} de valor ${preco} na quantidade ${quant} com 18% de imposto tem um valor final de: ${valor}.`)