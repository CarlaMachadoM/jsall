let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

frutas[1] = "Manga"; //alterando o valor do indice no item 1
console.log(frutas[1]);
console.log(frutas.length);

console.log("\n --------- \n" + frutas[1]);
frutas.push("Melão"); //adiciona no final
frutas.push("Kiwi");
frutas.push("Morango");

console.log("O novo amanho do array é de: " +frutas.length);console.log(frutas);

frutas.pop() //retira no final
console.log(frutas);

console.log("\n --------- \n" + frutas[1]);

frutas.shift(); //remove o primeiro elemento
console.log(frutas)
frutas.unshift("Jabuticaba") //acrescenta elemento no início

let indice = frutas.indexOf("Laranja");
console.log(indice); // 1

let algumasFrutas = frutas.slice(1, 3);
console.log(algumasFrutas); // ["Banana", "Laranja"]

algumasFrutas = frutas.slice(3 , 4); //o primeiro numero é a posição onte começa a remover itens e o segundo valor é quantos itens vao ser removidos
console.log(algumasFrutas)



// let cabecalho = ["Código" , "Nome" , "Preço"]
// let produto = ["ABC123" , "Fone de ouvido" , 150.00]

// console.log(
//     `Detalhes do Produto:
//     ${cabecalho[0]} : ${produto[0]}
//     ${cabecalho[1]}: ${produto[1]}
//     ${cabecalho[2]} : ${produto[2]}`)

let array = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g']; //splice recebe o índice onde começa e o numero de itens a remover
array.splice(2,4); //remove o elemento no indice 2 (c)
console.log(array); //resultado [a,b,g]

//map aplica uma função para cada evento do array
//o exemplo abaixo transforma cada elemento em maiúsculas
let frutasMaiusculas = frutas.map(function(fruta) {
    return fruta.toUpperCase(); 
  });
  
  console.log(frutasMaiusculas); // ["ABACAXI", "BANANA", "LARANJA"]

  // cria um novo array contendo apenas os elementos que atendem a uma determinada condição.
  let frutasComA = frutas.filter(function(fruta) {
    return fruta.includes("a" || "á" || "ã");
  });
  
  console.log(frutasComA); 