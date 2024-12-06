// Exercício 1
const cores = ["Vermelho", "Verde", "Azul"];
cores[cores.indexOf("Verde")] = "Amarelo";
console.log("Cores atualizadas:", cores);
console.log("Terceira cor:", cores[2]);

// Exercício 2
const animais = ["Gato", "Cachorro", "Pássaro"];
animais.push("Elefante");
animais.splice(animais.indexOf("Gato"), 1);
console.log("Lista de animais atualizada:", animais);

// Exercício 3
const paises = ["Brasil", "Argentina", "Chile", "Uruguai"];
console.log("Número de países:", paises.length);

// Exercício 4
const numeros = [10, 20, 30, 40, 50];
console.log("O índice do número 30 é:", numeros.indexOf(30));

// Exercício 5
const alimentos = ["Arroz", "Feijão", "Batata", "Macarrão", "Carne"];
const ingredientes = alimentos.filter(item => item === "Feijão" || item === "Batata");
console.log("Ingredientes necessários:", ingredientes);
