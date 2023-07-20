/**
 * Escreva um algoritmo que solicite 2 números e uma operação
matemática. O algoritmo deve realizar o cálculo com os 2 números
digitados conforme a operação informada.
 */

const num1 = Number(prompt("Digite o número 1!"));
const num2 = Number(prompt("Digite o número 2!"));

const operacao = prompt(
  "Digite a operação matemática: 1-adição, 2-subtração, 3-divisão e 4-multiplicação."
);

switch (+operacao) {
  case 1:
    document.write(num1 + num2);
    break;
  case 2:
    document.write(num1 - num2);
    break;
  case 3:
    document.write(num1 / num2);
    break;
  case 4:
    document.write(num1 * num2);
    break;
  default:
    document.write("Digite uma operação matemática!");
    break;
}
