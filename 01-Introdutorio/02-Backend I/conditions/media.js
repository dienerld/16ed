let nota1 = prompt("Digite a nota 1: ");
let nota2 = prompt("Digite a nota 2: ");
let nota3 = prompt("Digite a nota 3: ");

let media = (+nota1 + +nota2 + +nota3) / 3;

console.log("MEDIA: ", media);

if (media >= 9) {
  alert("Aprovado com nota excelente");
} else if (media >= 7 && media < 9) {
  alert("Aprovado com nota boa");
} else {
  let recuperacao = prompt("Digite a nota de recuperacao: ");

  if (+recuperacao >= 6) {
    alert("Aprovado na recuperacao");
  } else {
    alert("Reprovado, estude e pratique mais");
  }
}
