//Faça um programa em Javascript que peça para o professor:
//- nome do aluno
//- nota 1
//- nota 2
//- nota 3
//- porcentagem de faltas
// se a media for >=7 E porcentagem de faltas for <25%, aluno aprovado
// se a media for <7 e >=5 E porcentagem de faltas for <25%, recuperação
//se a media for <5 OU faltas >=25% , aluno reprovado
// otimize a sua logica e faça um codigo elegante e limpo

//DICA: PRIMEIRO CRIE A LOGICA, SE NECESSARIO FAÇA UM ALGORITMO/FLUXOGRAMA, DETERMINE OS PASSOS E SÓ ENTÃO PARTA PARA O CODIGO

const prompt = require("prompt-sync")();

let nome = prompt("Digite o nome do aluno: ");
let nota1 = parseFloat(prompt("Digite a primeira nota do aluno: "));
if (nota1 <0 || nota1 >10){
    console.log(`Valores inválidos, por favor digite notas entre 0 e 10.`);
}

let nota2 = parseFloat(prompt("Digite a segunda nota do aluno: "));
if (nota2 <0 || nota2 >10){
    console.log(`Valores inválidos, por favor digite notas entre 0 e 10.`)
}

let nota3 = parseFloat(prompt("Digite a terceira nota do aluno: "));
if (nota3 <0 || nota3 >10){
    console.log(`Valores inválidos, por favor digite notas entre 0 e 10.`)
}

let faltas = parseFloat(prompt("Digite o percentual de faltas do aluno: "));

if (faltas <0 &&  faltas >100){
    console.log("Valores inválidos, por favor digite valores entre 0 e 100. ")
}
let media = (nota1 + nota2 + nota3) / 3;
media = media.toFixed(2); 

if (media < 0 || media > 10) {
    console.log("Valores inválidos.");
}

faltas = faltas.toFixed(2); 

if (media <0 && media > 10){
    console.log("Valores inválidos. ")
}

if (media >= 7 && faltas < 25){
    console.log(`O aluno ${nome} foi aprovado com nota ${media} e ${faltas}% de faltas. `);
} else if(media >= 5 && media < 7 && faltas < 25){
    console.log(`O aluno ${nome} está de recuperação, com nota ${media} e ${faltas}% de faltas. `)
} else if (media < 5 || faltas >= 25){
    console.log(`O aluno ${nome} foi reprovado com nota ${media} e ${faltas}% de faltas. `)
} 

// switch...case

