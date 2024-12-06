// let contador = 1;

// while (contador <= 100) { //ou if (contador<=5)
//   console.log("Contagem:", contador);
//   contador++;
// }

//do..while
// let numero = 1;

// do { //primeiro executa, depois verifica
//   console.log("Número:", numero);
//   numero++;
//   if(numero == 10){break}
// } while (numero <= 15);



const prompt = require('prompt-sync')();
// let entrada;

// do {
//   entrada = Number(prompt("Digite um número entre 1 e 10: "));
// } while (entrada < 1 || entrada > 10);

// console.log("Número válido:", entrada);
entrada = Number(prompt("Digite um número entre 0 e 10: "));

while(entrada < 0 || entrada > 10){
    entrada = Number(prompt("Número inválido! Digite um número entre 0 e 10: "));
}
console.log("Número válido:", entrada)


//break

const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}
