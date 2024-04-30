//Exercitando Arrays e funções

// //EXercicio 1:Somar todos os elementos de um array

// let elementos = [1, 2, 3, 4]

// function somaElementos(vetor) {
//     let soma = 0
//     for(let i = 0; i < vetor.length; i++){
//         soma += vetor[i]
//     }
//     return soma
// }

// console.log("A soma dos elementos é: ", somaElementos(elementos))

//Exercicio 2: Encontrar o maior número em um Array

// function maiorNumero(vetor){
//     let maior = vetor[0]
//     for (let i = 1; i < vetor.length; i++) {
//         if(vetor[i] > maior){
//             maior = vetor[i]
//         }
        
//     }
//     return maior
// }
// console.log("Dentre os elementos omaior é:", maiorNumero([1,10,100,70]))

//Exercicio 3: Reverter um array

// function reverterArray(vetor){
//     let vetorResultado = []
//     for (let i = vetor.length -1; i >= 0; i--){
//     vetorResultado.push(vetor[i])
//     }
//     return vetorResultado
// }
//  console.log("O vetor invertido é:", reverterArray([1,2,3,4]))

// Exercicio 1: Somar todos os elementos de uma matriz

// function somaMatriz(matriz){
//     let soma = 0
//     for(let i = 0; i < matriz.length; i++){
//         for(let j = 0; j < matriz[i].length; j++){
//         soma += matriz[i][j]
//     }
// }
// return soma
// }

// console.log("A soma dos elementos contidos na nossa matriz é: ", somaMatriz([[1,2],[3,4]]))

//Exercicio 2: Encontrar o maior número em uma matriz
// function maiorNumeroMatriz(matriz){
//     let maior = matriz[0][0]
//     for(let i = 0; i < matriz.length; i++){
//         for(let j = 0; j < matriz[i].length; j++){
//             if(matriz[i][j] > maior){
//                 maior = matriz[i][j]
//             }
//         }
//     }
//     return maior
// }

// console.log("O maior número da minha matriz é: ", maiorNumeroMatriz([[1,2],[3,4]]))

//Funções avançadas: String

/*
 string é considerado um valor primitivo, porem, ao ser interpretado o JS os converte objetos,
possuindo propriedades e métodos */

//Funções Matematicas

let data = new Date()

console.log(data.toString())

// Encontrar a quantidade de milisegundos entre duas datas
