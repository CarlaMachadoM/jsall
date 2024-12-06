// Utilizando a logica acima como ponto de partida, implemente o jogo de adivinhação sendo:

// - O usuario terá 5 tentativas de adivinhar o numero
// - **enquanto** o usuario nao acertar o numero **E** nao atingir a 5a. tentativa, o programa irá informar que ele nao acertou e aguardar novo palpite
// - caso alguma das condições seja atingida, mostrar uma mensagem parabenizando pelo acerto ou boa sorte na próxima por nao ter conseguido
// - anexe a pagina no seu portifólio JS e envie o link na atividade
// - **desafio extra:** faça com que o programa gere um numero aleatorio a cada execução

const prompt = require("prompt-sync")();

let numeroAleatorio = Math.floor(Math.random() * 10);
let contador = 1


while (contador <= 5) {
    entrada = Number(prompt("Digite um número entre 1 e 10: "));
    if(entrada == numeroAleatorio){
        console.log(`Parabens você acertou o numero`)
    } else{
        console.log(`que pena você errou a sua tentativa ${contador}`)
        contador++;
    }
  } 



