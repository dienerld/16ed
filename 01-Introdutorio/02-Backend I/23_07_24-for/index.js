// let i = 10;

// // compara antes de executar
// for (let i = 0; i <= 4; i++) {
//   console.log("for -->", i);
//   i = 6;
// }

// // compara antes de executar
// while (i < 10) {
//   console.log("while -->", i);
//   i++;
// }

// // executa e depois compara
// do {
//   console.log("do while -->", i);
// } while (i < 0);

// console.log("sem escopo ->", i);

/**
 * Escreva um programa que leia um número
qualquer e mostre a tabuada desse
número.

Exemplo:
Input: 5
Output:
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50


const number = Number(prompt("Digite um número"));

for (let contador = 0; contador <= 10; contador++) {
  document.write(
    number + " x " + contador + " = " + number * contador + " <br>"
  );
}

document.write("i fora do for -> " + contador);
*/

/*
Faça um algoritmo que pergunte ao
usuário um número inteiro e positivo
qualquer e mostre uma contagem até
esse valor:

Exemplo:
Input: 35
Output: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!
*/
const number = Number(prompt("Digite um número"));

for (let contador = 0; contador <= number; contador++) {
  document.write(contador + " ");
}
