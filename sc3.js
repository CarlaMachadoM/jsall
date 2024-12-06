// ### **EXERCÍCIO** 3: Dicionário de cores

// Crie um programa que leia o nome de uma cor em inglês e exiba sua tradução em português. Considere as seguintes cores:

// - `"red"` → `"vermelho"`
// - `"blue"` → `"azul"`
// - `"green"` → `"verde"`
// Se a cor não estiver na lista, exiba `"Cor desconhecida"`.

// Exemplo de entrada e saída:

// - Entrada: `"blue"`
// - Saída: `"azul"`

const prompt = require("prompt-sync")();

console.log("\n 1 - Red \n 2 - Blue \n 3 - Green \n. ");
let cor = parseFloat(prompt("Digite o número correspondente a tradução que deseja fazer: "));

switch(cor){
    case 1:
        console.log("Red significa VERMELHO. ");
        break
    case 2: 
        console.log("Blue significa AZUL. ");
        break
    case 3:
        console.log("Green significa VERDE. ");
        break
}