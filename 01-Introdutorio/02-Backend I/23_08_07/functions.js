function recebe2ValoresERetornaConcatenado(valor1, valor2) {
  // nunca faz a soma caso seja numero
  return valor1 + "" + valor2;
}

function semRetorno(valor) {
  console.log(valor);
}

// arrow function
const a = (a, b) => {
  console.log(a, b);
};

const soma = (v1, v2) => v1 + v2;

console.log(recebe2ValoresERetornaConcatenado(1, 2));
console.log(recebe2ValoresERetornaConcatenado("Growdev", " Dornelas"));

console.log(semRetorno("Turma 16ed"));

console.log("---------------Arrow function--------------------");
a(1, 5);
console.log(soma);
