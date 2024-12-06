// Exercício 3: Calculadora de Diferença
// Solicite dois números ao usuário e calcule a diferença entre o maior e o menor número. Use parseFloat() para converter as entradas em números decimais.

const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));

if (num1 > num2){
    let diferenca = parseFloat(num1) - parseFloat(num2);
    console.log(`A diferença entre os números é: ${diferenca}`);
} else{
    let sub = num2 - num1;
    console.log(`A diferença entre os números é: ${sub}`);
}