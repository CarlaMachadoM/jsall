// ### **EXERCÍCIO** 2: **Menu de Operações Matemáticas**

// Crie um programa que exiba um menu de opções para o usuário escolher uma operação matemática:

// - `1` → Soma
// - `2` → Subtração
// - `3` → Multiplicação
// - `4` → Divisão

// O programa deve ler a escolha do usuário e também dois números, ems eguida realizar a operação correspondente e exibir o resultado. Se a opção for inválida, exiba `"Opção inválida"`.

const prompt = require("prompt-sync")();

console.log("\n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão.");
let conta = parseFloat(prompt("Digite o número correspondente a operação escolhida: "));
let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));

switch(conta){
    case 1:
        let soma = num1 + num2;
        console.log(`O resultado da soma é ${soma}.`);
        break
    case 2:
        let sub = num1 - num2;
        console.log(`O resultado da subtração é ${sub}. `);
        break
    case 3:
        let mult = num1 * num2;
        console.log(`O resultado da multiplicação é ${mult}. `);
        break
    case 4: 
        let divi = num1 / num2;
        console.log(`O resultado da divisão será ${divi}. `);
        break
} 
    