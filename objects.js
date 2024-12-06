let fruta = "maçã"  //criação de variável

let frutas = ["maçã" , "banana" , "uva"]  //criação de array

let pessoa2 = {                       //criação de objeto
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
}


//-------------------------------

//exemplo de objeto dentro de objeto

const pessoa = {
    nome: "João",
    idade: 30,
    endereco: {
      rua: "Rua das Flores",
      numero: 123,
      cidade: "São Paulo",
      estado: "SP"
    }
  };
  
  // Acessando propriedades do objeto 'endereco'
  console.log(pessoa.nome);          // João
  console.log(pessoa.endereco.rua);  // Rua das Flores
  console.log(pessoa.endereco.cidade); // São Paulo


//exemplo de um array contendo vários objetos

const pessoas = [
    {
      nome: "Ana",
      idade: 28,
      profissao: "Engenheira"
    },
    {
      nome: "Carlos",
      idade: 35,
      profissao: "Professor"
    },
    {
      nome: "Maria",
      idade: 22,
      profissao: "Designer"
    }
  ];
  
  // Acessando os objetos no array
  console.log(pessoas[0].nome); // Ana
  console.log(pessoas[1].idade); // 35
  console.log(pessoas[2].profissao); // Designer


 
//array de arrays
//Exemplo: cada filial de uma loja tem 3 vendas: frutas, bolsas e canetas

vendaslojas = [
    [2000 , 3000, 4000], //0, 1 ,2
    [400, 500, 1000] //0, 1 ,2
]

console.log("As vendas de bolsas da primera loja foram: " + vendaslojas[0][1])
console.log("As vendas de canetas da segunda loja foram: " + vendaslojas[1][2])



//objeto contendo vários objetos

const empresa = {
    funcionario1: { nome: "Ana", idade: 28, cargo: "Engenheira" },
    funcionario2: { nome: "Carlos", idade: 35, cargo: "Professor" },
    funcionario3: { nome: "Maria", idade: 22, cargo: "Designer" }
  };
  
  // Acessando os objetos dentro do objeto 'empresa'
  console.log(empresa.funcionario1.nome); // Ana
  console.log(empresa.funcionario2.cargo); // Professor
  console.log(empresa.funcionario3.idade); // 22
  console.log(pessoa["profissao"]); // notação de colchete

  empresa.funcionario3.idade = 23;  //alterando o valor de uma propriedade do objeto
  console.log(empresa.funcionario3.idade)

//--------------------------

const pessoa3 = {
    nome: "Ana",
    idade: 25
  };

  // Adicionando o objeto 'endereco' depois
  pessoa3.endereco = {
    rua: "Avenida Central",
    numero: 456,
    cidade: "Rio de Janeiro",
    estado: "RJ"
  };
  
  console.log(pessoa3.endereco.cidade); // Rio de Janeiro



//   Adicionando um novo objeto ao array:

const pessoas4 = [
    {
      nome: "Ana",  //0
      idade: 28,
      profissao: "Engenheira"
    },
    {
      nome: "Carlos",  //1
      idade: 35,
      profissao: "Professor"
    },
  ];
  pessoas4.push({  //este objeto será acrescentado ao array acima ^ 2
    nome: "Pedro",
    idade: 40,
    profissao: "Médico"
  });
  
  console.log(pessoas4[2].nome); // Pedro


//----------------------------

// Removendo objetos de um objeto

const empresa2 = {
    nome: "Tech Solutions",
    fundacao: 2010,
    endereco: {
      rua: "Rua das Flores",
      numero: 123,
      cidade: "São Paulo",
      estado: "SP"
    }
  };
  
  // Removendo o objeto 'endereco'
  delete empresa2.endereco;
  
  console.log(empresa2);
  /*
  Saída:
  {
    nome: "Tech Solutions",
    fundacao: 2010
  }
  */

//-------------------------

// Usando Object.assign() para mesclar objetos

const pessoa5 = {
    nome: "João",
    idade: 30
  };
  
  const novoEndereco = {
    endereco: {
      rua: "Rua das Palmeiras",
      numero: 456,
      cidade: "Rio de Janeiro"
    }
  };
  
  // Mesclando o novo objeto 'endereco' no objeto 'pessoa'
  Object.assign(pessoa5, novoEndereco);
  
  console.log(pessoa5);
  /*
  Saída:
  {
    nome: "João",
    idade: 30,
    endereco: {
      rua: "Rua das Palmeiras",
      numero: 456,
      cidade: "Rio de Janeiro"
    }
  }
  */

//------------------------------

//Criando um Array somente com as chaves do objeto. O método Object.keys() retorna um array com as propriedades de um objeto.

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
const keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'city']. Imprime as chaves, não os valores

keys.forEach(key => {console.log (key)})

//-----------------------

//### **`Object.values()`**

//O método `Object.values()` retorna um array com os valores das propriedades de um objeto.


const person2 = {
    name: 'John',
    age: 30,
    city: 'New York'
};
const values = Object.values(person2);
console.log(values); // ['John', 30, 'New York']
values.forEach(value => {console.log(value)})

//-------------------

//Adicionando Novas Propriedades

pessoa.email = "joao@email.com";
console.log(pessoa); // { nome: 'João', idade: 30, email: 'joao@email.com' }

//----------------------------

//Objetos Aninhados

let aluno = {
    nome: "Maria",
    idade: 22,
    endereco: {
      cidade: "São Paulo",
      estado: "SP"
    }
  };
  
  console.log(aluno.endereco.cidade); // "São Paulo"

  //-----------------------

  //### 6. Verificando Propriedades

//### 6.1. Operador `in`

//Podemos verificar se uma propriedade existe em um objeto usando o operador `in`.

let pessoa6 = {
    nome: "João",
    idade: 30,
    saudacao: function() {
      return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
  };
  console.log("nome" in pessoa6); // true
  console.log("sobrenome" in pessoa6); // false

  //Verificando Propriedades

  let pessoa = {
    nome: "João",
    idade: 30,
    saudacao: function() {
      return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
  };
  console.log("nome" in pessoa); // true
  console.log("sobrenome" in pessoa); // false

  //-------------------------

  //### `hasOwnProperty()`

//Outra maneira de verificar se uma propriedade pertence a um objeto é usando o método

console.log(pessoa.hasOwnProperty("idade")); // true

//--------------------------------

//### Percorrendo Objetos

//Podemos percorrer todas as propriedades de um objeto usando o loop `for...in`

let pessoa7 = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
  };
  for (let chave in pessoa7) {
    console.log(chave + ": " + pessoa7[chave]);
  }


//### Exemplo Completo

//Agora, vamos ver um exemplo completo de criação e manipulação de um objeto

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    ligar: function() {
      return `O carro ${this.marca} ${this.modelo} está ligado.`;
    }
  };
  
  console.log(carro.ligar()); // "O carro Toyota Corolla está ligado."
  carro.ano = 2021; // Atualizando o ano
  console.log(carro.ano); // 2021

  //-----------------------



