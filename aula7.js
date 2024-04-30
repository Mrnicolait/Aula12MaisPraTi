// Array ou Vetor

// let listaCompras = Array()

// listaCompras[0] = "shampoo"
// listaCompras[1] = "condicionador"
// listaCompras['x'] = 100

// console.log(listaCompras)

// let listaFrutas = ['Banana' , 'Morango']

// console.log(listaFrutas)

// let lista_viagem = Array('Passagens' , 'Malas')

// console.log(lista_viagem)

// //array multidimencionais ou Matriz
// let lista_coisas = Array()

// lista_coisas['Frutas'] = Array()

// lista_coisas['Frutas'][0] = "Morango"
// lista_coisas['Frutas'][1] = "Uva"
// lista_coisas['Frutas'][2] = "Laranja"
// lista_coisas['Frutas'][3] = "Bergamota"

// lista_coisas['Viagem'] = Array()
// lista_coisas['Viagem'][0] = "Passagens"
// lista_coisas['Viagem'][1] = "Malas"

// console.log(lista_coisas)

// //inserção de elementos no final do array
// lista_coisas['Frutas'].push('Banana')

// //inserção de elementos no inicio do array
// lista_coisas['Frutas'].unshift('Limão')

// //Exclusão de elementos no final do array
// lista_coisas['Frutas'].pop()

// //Exclusão de elementos no começo do array
// lista_coisas['Frutas'].shift()


// console.log(lista_coisas)

// let listaProdutos = Array('Computador', 'Caneta', 'Chuteira')

// let aux = listaProdutos.indexOf('Computador')

// if(aux === -1){
//     console.log('Elemento não existe no Array')    
// } else {
//     console.log('Elemento existe e está na posição' + aux)
// }

// let listaProdutos = Array(1, 2, 3, 4)

// console.log(listaProdutos.sort())

// //FUNÇÃO
// function calcularAreaTerreno(largura, comprimento) {

// let area = largura * comprimento
// return area
// }

// let prompt = require('prompt-sync')()

// let lg = prompt("Digite a largura do terreno em metros:")
// let cp = prompt("Digite o comprimento do terreno em metros:")

// //chamada da função e passagem de parametro
// let resultado = calcularAreaTerreno(lg, cp)

// console.log('O terreno possui' + resultado + ' metros quadrados')

//Global - permite que variavel seja acessada em qualquer parte do codigo
// let variavelGlobal;
// let x = 5;
// let y = -2;
// //Função - apenas dentro da função.
// function variavelF (var1, var2){
//     let variavelFuncao = var1 + var2 //Função
//     return variavelFuncao;
// }
// variavelGlobal = variavelF(x,y); //Global
// //Bloco - variaveis dentro de blocos como if, for, while...
// if (variavelGlobal > 0){
//     let maior = true //Bloco
//     if (maior){
//         console.log('OK')
//     }


// // função anonimas
// let exibirFuncao = function(){
//     console.log('Olá')
// }

// exibirFuncao()

let callbackSucesso= function(titulo) {
    console.log(titulo)
}

let callbackErro = function(erro){
    console.log(erro)
}
function exibirFuncao(callbackSucesso, callbackErro) {
if(true) {
    callbackSucesso('Funções de callback em caso de sucesso')
} else {
    calbackErro('Função de callback em caso de erro')
}
}


exibirFuncao(callbackSucesso, callbackErro)

