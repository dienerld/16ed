let chover = false;

if (chover) {
  console.log("Já está chovendo...");
} else {
  console.log("Eba, não está chovendo!");
}

// ------------------------------------------

const idade = 60;

if (idade < 12) {
  console.log("criança");
} else if (idade < 18) {
  console.log("adolescente");
} else if (idade < 60) {
  console.log("adulto");
} else {
  console.log("idoso");
}

// ------------------------------------------

const ligado = true;
const combustivel = 50;

if (ligado == true && combustivel > 0 && combustivel > 50) {
  console.log("Carro ligado");
} else if (ligado == true && combustivel <= 50) {
  console.log("Carro ligado, pouco combustivel");
} else {
  console.log("Carro desligado");
}

if (!ligado) {
  console.log("Não ligado");
}

// ------------------------------------------

let nota1 = prompt("Digite uma nota 1:");
let nota2 = prompt("Digite uma nota 2:");

nota1 = +nota1;
nota2 = +nota2;

let total = nota1 + nota2;

console.log(nota1 + nota2);

alert(`Total das notas: ${total}`);
