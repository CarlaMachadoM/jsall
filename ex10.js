// O usuário coloca um numero, e o programa diz se é par ou impar.

const prompt = require("prompt-sync")();

let numero = prompt("Digite um número: ");
if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.")
}