/**
 * 4. O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um
algoritmo para ler o custo de fábrica de um carro,calcular e escrever
o custo final ao consumidor.
 */
const valueCar = Number(
  prompt(
    "Para cálculo de imposto e custo de fábrica, digite o valor do veículo"
  )
);
const custofabric = 0.28;
const imposto = 0.45;
const parcCusto = valueCar * custofabric;
const parcimposto = valueCar * imposto;
document.write(
  `O valor do custo de fábrica do veículo informado é de R$${parcCusto.toFixed(
    2
  )}, e o valor de impostos é de R$${parcimposto}`
);
