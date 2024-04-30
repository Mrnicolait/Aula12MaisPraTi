// // 1- Graus Celsius para Graus Fahrenheit

// const prompt = require("prompt-sync")();
// let celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));

// let fahrenheit = (celsius * 9/5) + 32;

// console.log("A temperatura em graus Fahrenheit é: " + fahrenheit);

// // 2- Eleitores Municipios
// const prompt = require("prompt-sync")();
// let numeroEleitores = parseInt(prompt("Digite o número de eleitores:"));
// let votosBrancos = parseInt(prompt("Digite o número de votos brancos:"));
// let votosNulos = parseInt(prompt("Digite o número de votos nulos:"));
// let votosValidos = parseInt(prompt("Digite o número de votos válidos:"));

// let totalVotos = votosBrancos + votosNulos + votosValidos;

// let percentualBrancos = (votosBrancos / totalVotos) * 100;
// let percentualNulos = (votosNulos / totalVotos) * 100;
// let percentualValidos = (votosValidos / totalVotos) * 100;

// console.log("Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%");
// console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");
// console.log("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%");

// // 3- Leia quatronumeros inteiros
// const prompt = require("prompt-sync")();
// let numero1 = parseInt(prompt("Digite o primeiro número inteiro: "));
// let numero2 = parseInt(prompt("Digite o segundo número inteiro: "));
// let numero3 = parseInt(prompt("Digite o terceiro número inteiro: "));

// let originalNumero1 = numero1;
// let originalNumero2 = numero2;
// let originalNumero3 = numero3;

// numero1 = numero1 + 25;
// numero2 = numero2 * 3;
// numero3 = numero3 + (originalNumero3 * 0.12);
// let resultado4 = originalNumero1 + originalNumero2 + originalNumero3;

// console.log("Resultado da operação 1 (soma de 25 ao primeiro número):", numero1);
// console.log("Resultado da operação 2 (triplo do segundo número):", numero2);
// console.log("Resultado da operação 3 (12% do valor original adicionado ao terceiro número):", numero3);
// console.log("Resultado da operação 4 (soma dos três primeiros números originais):", resultado4);

// // 4- Nota média do aluno
// const prompt = require("prompt-sync")();

// let nota1 = parseFloat(prompt("Digite a primeira nota: "));
// let nota2 = parseFloat(prompt("Digite a segunda nota: "));


// let media = (nota1 + nota2) / 2;
// console.log("Sua média é:", media);

// if (media >= 6.0) {
//     console.log("PARABÉNS!!! Você foi aprovado");
// } 

// // 5- acrescentar voce foi reprovado no exerc.4

//  else {
//     console.log("Você foi reprovado, Estude mais");
// }

// // 6- Lados Triangulo A, B e C
// const prompt = require("prompt-sync")();

// let ladoA = parseFloat(prompt("Digite o valor do lado A do triângulo: "));
// let ladoB = parseFloat(prompt("Digite o valor do lado B do triângulo: "));
// let ladoC = parseFloat(prompt("Digite o valor do lado C do triângulo: "));


// if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    
//     if (ladoA === ladoB && ladoB === ladoC) {
//         console.log("O triângulo é equilátero.");
//     } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
//         console.log("O triângulo é isósceles.");
//     } else {
//         console.log("O triângulo é escaleno.");
//     }
// } 


// // 7- Maças
// const prompt = require("prompt-sync")();

// let numeroMacas = parseInt(prompt("Digite o número de maçãs compradas: "));

// // Calculando o valor total da compra
// let valorTotal;
// if (numeroMacas < 12) {
//     valorTotal = numeroMacas * 0.30;
// } else {
//     valorTotal = numeroMacas * 0.25;
// }

// // Exibindo o valor total da compra
// console.log("O valor total da compra é: R$", valorTotal.toFixed(2));


// // 8- 2 valores, ordem crescente sem repetir
// const prompt = require("prompt-sync")();

// let valor1, valor2;

// do {
//     valor1 = parseFloat(prompt("Digite o primeiro valor: "));
//     valor2 = parseFloat(prompt("Digite o segundo valor: "));
    
//     if (valor1 === valor2) {
//         console.log("Por favor, digite valores diferentes.");
//     }
// } while (valor1 === valor2); 
// if (valor1 < valor2) {
//     console.log("Os valores em ordem crescente são:", valor1, valor2);
// } else {
//     console.log("Os valores em ordem crescente são:", valor2, valor1);
// }


// // 9- codigo de Origem
// const prompt = require("prompt-sync")();

// const codigoOrigem = parseInt(prompt("Digite o código de origem do produto: "));

// let regiao;

// if (codigoOrigem === 1) {
//     regiao = "Sul";
// } else if (codigoOrigem === 2) {
//     regiao = "Norte";
// } else if (codigoOrigem === 3) {
//     regiao = "Leste";
// } else if (codigoOrigem === 4) {
//     regiao = "Oeste";
// } else if (codigoOrigem === 5 || codigoOrigem === 6) {
//     regiao = "Nordeste";
// } else if (codigoOrigem === 7 || codigoOrigem === 8 || codigoOrigem === 9) {
//     regiao = "Sudeste";
// } else if (codigoOrigem >= 10 && codigoOrigem <= 20) {
//     regiao = "Centro-Oeste";
// } else if (codigoOrigem >= 25 && codigoOrigem <= 50) {
//     regiao = "Nordeste";
// } else {
//     regiao = "Produto Importado";
// }

// console.log("A região correspondente ao código de origem", codigoOrigem, "é:", regiao);

// // 10- Numero Inteiro e escreve-lo 10x
// const prompt = require("prompt-sync")();

// const numero = parseInt(prompt("Digite um número inteiro: "));

// for (let i = 0; i < 10; i++) {
//     console.log(numero);
// }

// // 11- numero inteiro que indica par ou impar e parar nulo ou negativo
// const prompt = require("prompt-sync")();

// console.log("Digite os valores inteiros (digite um valor nulo ou negativo para encerrar):");

// while (true) {
//         const valor = parseInt(prompt("Digite um valor inteiro: "));

//        if (valor <= 0 || isNaN(valor)) {
//         console.log("Programa encerrado.");
//         break;
//     }
//     if (valor % 2 === 0) {
//         console.log(valor, "é PAR.");
//     } else {
//         console.log(valor, "é ÍMPAR.");
//     }
// }

// // 12- 1000 a 1999 divididos por 11, dão resto igual a 5
// for (let i = 1000; i <= 1999; i++) {
//     if (i % 11 === 5) {
//         console.log(i);
//     }
// }

// // 13- ler 5 valores N e mostre tabuado de 1 ate N
// const prompt = require("prompt-sync")();

// console.log("Digite cinco valores para N:");
// for (let i = 0; i < 5; i++) {
//     const N = parseInt(prompt("Digite o valor de N: "));

//     // Calculando e mostrando a tabuada de 1 até N
//     console.log("Tabuada de", N, ":");
//     for (let j = 1; j <= N; j++) {
//         console.log(j, "x", N, "=", j * N);
//     }
//     }

// // 14- while receber numero decimais ate digitar 0
// const prompt = require("prompt-sync")();

// let soma = 0;
// let quantidade = 0;

// console.log("Digite números decimais (digite 0 para encerrar):");
// let numero = parseFloat(prompt("Digite um número decimal: "));
// while (numero !== 0) {
//     soma += numero;
//     quantidade++;
//     numero = parseFloat(prompt("Digite outro número decimal (ou 0 para encerrar): "));
// }

// // 15- while receber numero decimal e o peso de cada um ate digitar 0 e média ponderada e peso
// const prompt = require("prompt-sync")();

// let somaNumeros = 0;
// let somaPesos = 0;
// let quantidade = 0;

// console.log("Digite números decimais e seus respectivos pesos (digite 0 para encerrar):");
// let numero = parseFloat(prompt("Digite um número decimal: "));
// while (numero !== 0) {
//     const peso = parseFloat(prompt("Digite o peso correspondente ao número: "));
    
//     somaNumeros += numero; 
//     somaPesos += peso; 
//     quantidade++; 

//     numero = parseFloat(prompt("Digite outro número decimal (ou 0 para encerrar): "));
// }

// let mediaNumeros = 0;
// let mediaPesos = 0;
// if (quantidade !== 0) {
//     mediaNumeros = somaNumeros / quantidade;
//     mediaPesos = somaPesos / quantidade;
// }
// console.log("A média dos números inseridos é:", mediaNumeros.toFixed(2));
// console.log("A média dos pesos inseridos é:", mediaPesos.toFixed(2));

// 16- while, imprimir 50 primeiros numeros primos maior que 100
let count = 0;
let numero = 101; 

console.log("Os 50 primeiros números primos maiores que 100 são:");
while (count < 50) {
    let primo = true;
    if (numero <= 1) {
        primo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                primo = false;
                break;
            }
        }
    }

    if (primo) {
        console.log(numero);
        count++;
    }
    numero++;
}