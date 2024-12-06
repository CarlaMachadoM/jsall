// Exercício 8: Calculadora de Salário
// Solicite ao usuário o número de horas trabalhadas por semana e o valor da hora trabalhada. Calcule o salário semanal e o salário mensal, assumindo que o usuário trabalha 4 semanas por mês. Use parseFloat() para converter a entrada do valor da hora e parseInt() para o número de horas. Exiba o salário semanal e o salário mensal.

const prompt = require("prompt-sync")();

let horas = parseInt(prompt("Digite quantas horas você trabalhou esta semana: "));
let trabalho = parseFloat(prompt("Digite o valor pago por hora: "));
let semana = parseInt(horas) * parseFloat(trabalho);
let mensal = semana * 4

console.log(`Seu salário semanal é de ${semana} e seu salário mensal é de ${mensal}.`)
