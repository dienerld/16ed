/**
 * 3. Crie um programa que peça um número e verifique se ele é positivo,
negativo ou zero.
 */

const numero = prompt("digite um numero");


if (numero < 0) {
  document.write(`seu numero e negativo ${numero}`);
} else if (numero > 0) {
  document.write(`seu numero e positivo ${numero}`);
} else {
  document.write('seu numero e 0 :${numero}' + numero);
}
