// ### **EXERCÍCIO 1 - Escolha de Bebida**

// Utilizando *switch…case* , crie um programa que pergunte qual bebida o usuário deseja dentre as opções listadas (água/suco/refrigerante/café), e então leia o numero digitado e exiba a mensagem correspondente:

// - `"1"` → `"Aqui está sua Água"`
// - `"2"` → `"Aqui está seu Suco"`
// - `"3"` → `"Aqui está seu Refrigerante"`
// - `"4"` → `"Aqui está seu Café"`

// Se a opção digitada não estiver entre 1 e 4, exiba `"Opção inválida"`.

const prompt = require("prompt-sync")();

console.log("\n 1 - Água  \n 2 - Suco  \n 3 - Refrigerante \n 4 - Café: ")
let bebida = parseFloat(prompt("Digite o número correspondente da sua bebida: "));

switch(bebida){
    case 1: 
        console.log("Aqui está sua água.");
    break;
    case 2:
        console.log("Aqui está seu suco. ")
        break
    case 3: 
        console.log("Aqui está seu Refrigerante. ")
        break
    case 4:
        console.log("Aqui está seu café. ")

} if (bebida <1 || bebida >4){
    console.log("Opção inválida, tente novamente. ")
}  
