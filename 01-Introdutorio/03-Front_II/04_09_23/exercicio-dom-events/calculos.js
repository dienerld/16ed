/* Desenvolva aqui a rotina */
/*
1. Tornar a planilha de cálculos dinâmica com DOM Events. Ao clicar no
botão calcular efetuar os cálculos solicitados na página.

2. Alterar o cálculo do botão calcular para que a cada vez que o
usuário digitar um valor e sair do input o formulário seja
automaticamente recalculado.
*/

function getValueElement(elementId) {
  return Number(document.getElementById(elementId).value);
}

function setValueElement(elementId, value) {
  document.getElementById(elementId).value = value;
}

function calcular() {
  const valorBase = getValueElement("valor_base");
  const valorTransporte = getValueElement("valor_transporte");
  const valorAlimentacao = getValueElement("valor_alimentacao");
  const valorReceita = valorBase + valorTransporte + valorAlimentacao;
  setValueElement("valor_receita", valorReceita);

  const valorAuto = getValueElement("valor_automovel");
  const valorFalta = getValueElement("faltas");
  const somaDesconto = valorFalta + valorAuto;
  setValueElement("valor_descontos", somaDesconto);

  const campoTotal = valorReceita - somaDesconto;
  setValueElement("valor_total", campoTotal);
}

const arrayInputs = document.getElementsByClassName("calcular");
for (const el of arrayInputs) {
  el.addEventListener("change", calcular);
}
