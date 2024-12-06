// Exercício 4: Conversão de Temperatura
// Solicite uma temperatura em Celsius e converta-a para Fahrenheit. A fórmula para conversão é F = C * 9/5 + 32, onde C é a temperatura em Celsius. Use parseFloat() para converter a entrada em número decimal.

const prompt = require("prompt-sync")();

let tempC = parseFloat(prompt("Digite a temperatura em CELCIUS: "));
let tempF = tempC * 9/5 + 32;
console.log(`A temperatura ${tempC} em Celcius corresponde a ${tempF} em graus Fahrenheit.`)