//   DESAFIO: Faça uma combinação de loops para imprimir cada chave valor de cada pessoa

// nome: Ana
// idade: 28
// profissao: Engenheira
// nome: Mario 
// idade: 25
// profissao: Professor

let personas = [{
    nome: "Ana",
    idade: 28,
    profissao: "Engenheira"},

    {
    nome: "Mario",
    idade: 25,
    profissao: "Professor"
}]
personas.forEach(personas => { //nome temporário
    Object.keys(personas).forEach(chave => { //outro foreach encadeado que percorrerá as propriedades
        console.log(`${chave}: ${personas[chave]}`)
    })
})

    