// Exercicio 1: par ou impar

// const prompt = require("prompt-sync")();
// let number = parseInt(prompt("digite um número: "));

// const parImpar = number % 2 === 0 ? "O número é par" : "O número é impar";

// console.log(parImpar);


////////////////////////////////////////////////////////////////////
// Exercicio 2: Maior de dois números.

// let numero1 = parseInt(prompt("digite um número: "))
// let numero2 = parseInt(prompt("digite um número: "))

// if(numero1 > numero2){
//   console.log("O primeiro numero é maior");
// }else if(numero1 < numero2){
//   console.log("O segundo numero é maior");
// }else{
//   console.log("Os números são iguais");
// }

// const numeroMaior = numero1 > numero2 ? "O primeiro numero é maior" : numero1 < numero2 ? "O segundo numero é maior" : "Os números são iguais";
// console.log(numeroMaior);



////////////////////////////////////////////////////////////////////
// Exercicio 3: Triangulo.
// const prompt = require("prompt-sync")();
// let lado1 = parseInt(prompt("Insira o comprimento do primeiro lado: "));
// let lado2 = parseInt(prompt("Insira o comprimento do segundo lado: "));
// let lado3 = parseInt(prompt("Insira o comprimento do terceiro lado: "));

// if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
//   console.log("É possível formar um triângulo com essas medidas.");
// }else{
//   console.log("Não é possível forma un triangulo");
// }



////////////////////////////////////////////////////////////////////
// Exercicio 4: Calculadora.

// let numero1 = parseInt(prompt("digite um número: "));
// let numero2 = parseInt(prompt("digite um número: "));
// let operacao = prompt("Insira uma das operações + - * / ");
// let resultado;

// if(operacao === '+'){
// resultado = numero1 + numero2;
// }else if(operacao === '-'){
//   resultado = numero1 - numero2;
// }else if(operacao === '*'){
//   resultado = numero1 * numero2;
// }else if(operacao === '/'){
//   if(numero2 !== 0){
//     resultado = numero1 / numero2;
//   }else{
//     console.log("Erro: divisão por zero");
//   }
// }else{
//   console.log("Operação inválida");
// }
// if(resultado !== undefined){
//   console.log(`Resultado: ${resultado}`);


////////////////////////////////////////////////////////////////////
//Switch Case

// let dia = parseInt(prompt("Insira um dia da semana: "));
// let nomeDoDIa;

// switch(dia){
//   case 1:
//     nomeDoDIa = "Domingo";
//     break;
//   case 2:
//     nomeDoDIa = "Segunda";
//     break;
//   case 3:
//     nomeDoDIa = "Terça";
//     break;
//   case 4:
//     nomeDoDIa = "Quarta";
//     break;
//   case 5:
//     nomeDoDIa = "Quinta";
//     break;
//   case 6:
//     nomeDoDIa = "Sexta";
//     break;
//   case 7:
//     nomeDoDIa = "Sábado";
//     break;
//   default:
//     console.log("Dia invalido");
//     break;
// }
// if(nomeDoDIa !== undefined){
//   console.log("o dia é: ", nomeDoDIa);
// }


// FOR
// ESTRUTURA REPETIÇÃO
// console.log(5*0);
// console.log(5*1);
// console.log(5*2);
// console.log(5*3);
// console.log(5*4);
// console.log(5*5);
// console.log(5*6);
// console.log(5*7);
// console.log(5*8);
// console.log(5*9);
// console.log(5*10);

// let contador = 0;
// let multiplicando = 5;

// // variavel; condição; incremento
// for (contador = 0; contador <=10; contador ++) {
//     console.log(`${multiplicando} * ${contador}=`, multiplicando * contador);
// };

// NUMERO PARES 1 A 100
// for (let i = 0; i <= 100; i+=2){
//     console.log(i)
// };

// SOMA DE TODOS NUMEROS 1 A 10
// let soma = 0;
// for (let i = 0; i <= 10; i++){
//      soma += i; 
// };
// console.log(soma);


// WHILE
// decrescente de 10 a 0
// let i = 10;
// while (i >= 1) {
//     i--;
//     console.log(i);
// }

//imprimir os multiplos de 5 em 5 até 100

// let num = 5;
// while (num <= 100) {
//     console.log(num);
//     num += 5;
// }

// somar numero de 1 a 1000 com while

// let num = 0;
// let soma = 0;
// while (num <= 1000) {
//     soma += num;
//     num ++;
// }
// console.log(soma);

// DO WHILE

// const prompt = require("prompt-sync")()
// let senha

// do {
//     senha = prompt("Digite a senha:")
// } while (senha !== "1234");

// console.log("Senha correta!");

// pedir usuario adivinhar um numero de 1 a 10

const prompt = require("prompt-sync")()
const numeroCorreto = Math.floor((Math.random() *10) + 1);
console.log(numeroCorreto)
let tentativa

do {
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 10:"))
    if (tentativa < numeroCorreto){
        console.log("Tente um número maior")
    } else if (tentativa > numeroCorreto) {
        console.log("Tente um número menor")
    }
} while (tentativa != numeroCorreto)

console.log("Parabéns!!! Você acertou")







