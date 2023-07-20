const opcao = prompt(
  "Digite uma dessas opções: Somar - Subtrair - Multiplicar"
);

switch (opcao) {
  case "somar": {
    console.log("somar");
    break;
  }

  case "subtrair": {
    document.write("subtrair");
    break;
  }

  case "dividir":
    console.log("multiplicar");
    console.log("multiplicar 2");
    console.log("multiplicar 3");
    break;

  default:
    console.log("Opção Inválida");
    break;
}

if (opcao === "somar") {
} else if (opcao === "subtrair") {
} else if (opcao === "dividir") {
} else {
}
