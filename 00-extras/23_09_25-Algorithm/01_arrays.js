// Recebe array e deve retornar de forma ordenada e sem duplicidades
/*
function sortedAndUnique(arr) {
  return Array.from(new Set(arr)).sort((a, b) => a - b);
}

console.log(sortedAndUnique([1, 5, 4, 1, 6, 8, 45, 132, 6, 144, 44, 44]));

// Recebe 2 arrays e compara os valores de cada posição, no fim deve retornar um array com a pontuação
function compareTriplets(a, b) {
  let pontuacaoA = 0;
  let pontuacaoB = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      pontuacaoA++;
    } else if (a[i] < b[i]) {
      pontuacaoB++;
    }
  }

  return [pontuacaoA, pontuacaoB];
}

const a = [17, 28, 30];
const b = [99, 16, 8];

console.log(compareTriplets(a, b));
*/

// Retornar somente em 1 array

// function flatArray(arr) {
//   return arr.flat(Infinity);
// }

// console.log(flatArray([1, [33, 34, [43, 4, [4]], 44, 98]]));
// // [1,33,34,43,4,4,44,98]

function factorial(n) {
  console.log("factorial ->", n);
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

4 * (3 * (2 * 1));
