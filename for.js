// Definindo o array
// let frutas = ["Maçã", "Banana", "Laranja" , "Melancia" , "Uva"]

// Imprimindo manualmente, mas acessando os elementos do array
// console.log(`Elemento no índice 0: ${frutas[0]}`)
// console.log(`Elemento no índice 1: ${frutas[1]}`)
// console.log(`Elemento no índice 2: ${frutas[2]}`)
// console.log(`Elemento no índice 3: ${frutas[3]}`)
// console.log(`Elemento no índice 4: ${frutas[4]}`)


//usando o loop para percorrer o array de frutas

// let frutas = ["Maçã", "Banana", "Laranja"]

//o contador 'i' começa no valor 0 e vai até frutas.length -1 (ultimo elemento do array)
// for (let i = 0; i < frutas.length; i++) { 
  
  //'frutas[i]' acessa o elemento no índice atual
//   console.log(`Elemento no índice ${i}: ${frutas[i]}`)
  
// }

// 1. **`let i = 0;`**:  *(CONTADOR)* Iniciamos a variável `i` com 0, porque os índices do array começam em 0.
// 2. **`i < frutas.length;`**: *(CONDIÇÃO)*  Continuamos o loop enquanto `i` for menor que o tamanho do array.
// 3. **`i++`**: *(INCREMENTO)* A cada iteração, incrementamos o valor de `i` (de 0 para 1, de 1 para 2, etc.).
// 4. **`frutas[i]`**: Usamos `i` , que é o próprio contador, para acessar o elemento correspondente no array.



// for (let i = 0; i <= 1000; i++) { //início, condição e incremento (i++ = i+1 +1)
//     console.log(`Número: ${i}`)
//   }



// Procurando por uma fruta específica
// let frutas = ["Maçã", "Banana", "Laranja", "Manga"]
// let frutaProcurada = "Laranja"

// for (let i = 0; i < frutas.length; i++) {
//   console.log(`Verificando: ${frutas[i]}`)

//   if (frutas[i] === frutaProcurada) {
//     console.log(`Fruta encontrada: ${frutas[i]}`);
//     break; // Interrompe o loop ao encontrar a fruta
//   }
// }

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
// let soma = 0;

// for (let i = 0; i < numeros.length; i++) {
//   soma += numeros[i]; // Adiciona o número atual à variável 'soma'. += acrescenta numeros
// }
// console.log("A soma dos números é:", soma);

// Modificar os valores de um array:

// let valores = [2, 4, 6, 8];
// for (let i = 0; i < valores.length; i++) {
//   valores[i] *= 2; // Multiplica cada valor por 2. *= é o valor *2
// }
// console.log("Array modificado:", valores);

// for (let i = 0; 1 == 1; i++){
//     console.log(`${i}`) //forçando um loop infinito
// }

//pressionar ctrl c ou ctrl z para parar


//Método forEach()

let numeros = [10, 20, 30]


num = 8

// Definindo uma função que será usada pelo forEach
function exibirNumero(numero) { //declaração da função
  console.log(`O número é: ${numero}`)
}


// Usando o forEach para percorrer o array e chamar a função p/ cada elemento
numeros.forEach(exibirNumero) //impressão automatizada usando forEach

exibirNumero(nummeros[0]) //impressão manual de cada elemento
exibirNumero(nummeros[1])
exibirNumero(nummeros[2])