/**
 * Adds two values together and returns the result.
 *
 * @param {number} valorA - The first value to add.
 * @param {number} valorB - The second value to add.
 * @return {number} The sum of valorA and valorB.
 */
function soma(valorA, valorB) {
  return valorA + valorB;
}

// console.log(soma(2, 2));

// const resultadoSoma = soma(1);
// console.log(resultadoSoma);

// recursão
// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

//Crie uma função que recebe 2 vetores de 10 elementos inteiros e que retorne a união dos dois em um novo vetor.

// Atv1

/**
 * Concatenates two vectors.
 *
 * @param {any} vectorA - the first vector to be concatenated
 * @param {any} vectorB - the second vector to be concatenated
 * @return {string} the concatenated vector
 */
function concatVector(vectorA, vectorB) {
  return vectorA + "" + vectorB;
}

function somaDeVetores(v1, v2) {
  const sum = [];

  for (let i = 0; i < v1.length; i++) {
    sum.push(v1[i] + (v2[i] || 0));
  }

  return sum;
}

const vectorA = [1, 2, 3, 4];
const vectorB = [10, 23, 23, 9];
// console.log(concatVector(vectorA, vectorB));

console.log(somaDeVetores(vectorA, vectorB));
soma();
