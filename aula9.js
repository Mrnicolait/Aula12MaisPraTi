// const pessoa = {
//     nome: "Lucas",
//     idade: 18,
//     profissao: "Músico",
//     email: "lucas@teste.com",
//     empregada: true
// }

// // trocar
// pessoa.nome = "Jurema"

// console.log(pessoa.nome)

// // Excluir
// delete pessoa.empregada

// console.log(pessoa)

// // atribuir função

// pessoa.falar = function() {
//     return `Meu nome é ${this.nome}, tenho ${this.idade} de idade e sou ${this.profissao}`
    
// }
//  console.log(pessoa.falar())

/* FOR IN - chave retorna o indice de um array ou o atributo de um objeto
FOR OF - chave retorna os atributos de um objetos ou os valores de um array
*/

// // for in .... estruturas de repetição, intera sobre as propriedades enumeradas de objetos
// for (let chave in pessoa){
//     console.log(chave + ": " + pessoa[chave])
// }

// // for of ... intera sobre as propriedades Vetores (array, etc..

// let numeros = [10, 20, 100]

// for (let numero of numeros){
//     console.log(numero)
// }

/* Exercicio: Voce tem uma lista de objetos que representam diferentes tipos
de veiculos e suas caracteristicas, seu objetivo é primeiro usar o FOR IN para
listar todas as propriedades e valores de cada veiculo. Depois usar FOR OF para
listar apenas os modelos dos veiculos.
*/

// const carro = [
//     {
//         modelo: 'Gol',
//         cor: 'vermelho',
//         ano: 2020
//     },
//     {
//         modelo: 'Palio',
//         cor: 'branco',
//         ano: 2022
//     },
//     {
//         modelo: 'Fiat',
//         cor: 'azul',
//         ano: 2021
//     }
// ];

// for (const chave in carro) {
//     console.log(carro[chave]);
// }

// for (const chave of carro) {
//     console.log(chave['modelo']);
// }

// let carro = {   
//     modelo: ['Ford', 'Toyota', 'Fiat'],
//     portas: [4, 2],
//     cores: ['preta', 'vermelha', 'azul', 'branca'],
//     ligar: function(){
//         console.log(`Ligado`);
//     }
// }

// for(let carros in carro){
//     console.log(`${carros} : ${carro[carros]}`);
// }

// for(let modelo of carro.modelo){
//     console.log(`Modelo de carro: ${modelo}`);
// }

// // forEach metodo especifico de array, executa uma função em cada item array

// let cores = ['Azul', 'Preto', 'Branco']

// cores.forEach((cor, indice) => {
//     console.log(indice + ": " + cor)
// })

/*Construa um array de números e calcule a soma total dos números e também imprima 
    cada número multiplicado por dois.*/

    // let numeros = [1,2,3,4,5,6];

    // let soma = 0;
    // numeros.forEach((valor, indice)=>{console.log(valor*2); soma += valor;});
    // console.log(soma);
// //2
//     let numer = [1,2,4,5,6,7];
//     let soma = 0;
    
//     numer.forEach( element => {
//         soma += element;
//         console.log(element*2);
//     });
//     console.log(soma);

// //exemplo 3

// let numeros = [1,2,3,4,5,6,7];
// let soma = 0
// numeros.forEach((value, index) => {
//     console.log(`Multiplicação por 2: ${value*2}`);
//     soma += value;
// });
// console.log(`Soma: ${soma}`);

// FACTORY //
// let BicicletaFactory = function(cor, tipo, marca) {
//     return {
//         cor,
//         tipo,
//         marca,
//     }
// }

// let bicicleta1 = BicicletaFactory(`azul`, `Speed`, `Caloi`)
// let bicicleta2 = BicicletaFactory(`preto`, `Mountain`, `Oggi`)


// console.log(bicicleta1)
// console.log(bicicleta2)

