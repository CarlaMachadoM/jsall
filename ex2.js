// Exercício 2: Calculadora de Idade
// Solicite o ano de nascimento do usuário e calcule a idade dele no ano atual. Utilize parseInt() para converter a entrada do usuário em um número inteiro. Para obter o ano atual, use new Date().getFullYear(). O new Date() cria um novo objeto de data e hora com a data e hora atuais, e getFullYear() extrai o ano da data atual.  
// Exemplo: let anoatual = new Date().getFullYear()

const prompt = require("prompt-sync")();


let ano = parseInt(prompt("Digite o ano do seu nascimento: "));
let anoatual = new Date().getFullYear();
let idade = anoatual - ano;
console.log(`Sua idade é: ${idade}`)