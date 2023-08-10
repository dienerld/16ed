/*
Deve ser desenvolvido um programa que realize um CRUD de carros.
Os inputs devem ser feitos através do PROMPT do HTML. O
funcionamento deve ser o seguinte:
Ao abrir a página, o sistema deve apresentar a seguinte tela:

Bem-vindo ao sistema de CRUD de veículos:

No momento, o sistema tem X carros cadastrados

Escolha uma das opções para interagir com o sistema:

1 - Cadastrar veículo
-> Ao entrar nesta opção o sistema deve pedir os seguintes
dados: modelo, marca, ano, cor e preco.
-> O veículo deve ser adicionado na lista de veículos que
armazena todos os veículos cadastrados
-> Todo veículo deve ter um identificador único. Este
identificador deve ser gerado de forma automática
*/

const veiculos = [
  {
    id: 0,
    modelo: "Civic",
    marca: "Honda",
    ano: 2023,
    cor: "Branco",
    preco: 150000,
  },
];
let id = 1;

const cadastrarVeiculo = () => {
  let carro = {
    id: id,
    modelo: prompt("Digite o modelo do seu carro"),
    marca: prompt("Digite a marca do seu carro"),
    ano: prompt("Digite o ano do seu carro"),
    cor: prompt("Digite a cor do seu carro"),
    preco: prompt("Digite seu preco do seu carro"),
  };
  veiculos.push(carro);
  id++;
};

/**
 * 2 - Listar todos os veículos
 *
-> Ao entrar nesta opção o sistema deve listar os veículos
com o seguinte layout:

ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
Preço: R$40.000
ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
Preço: R$40.000
 */

function listar(array) {
  array.forEach((veiculo) => {
    console.log(
      `ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Marca: ${veiculo.marca} | Ano: ${veiculo.ano} | Cor: ${veiculo.cor} | Preço: ${veiculo.preco}`
    );
  });
}

/**
 * 3 - Filtrar veículos por marca

-> Ao entrar nesta opção o sistema deve pedir para o
usuário digitar a marca que quer filtrar

-> Deve ser listado os veículos que forem da mesma marca

-> A lista deve ter o seguinte layout:
ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
 */

function separarPorMarca() {
  const escolheMarca = prompt("Digite a marca que deseja filtrar:");
  return veiculos.filter((veiculo) => veiculo.marca === escolheMarca);
}

/*
4 - Atualizar veículo

-> Ao entrar nesta opção o sistema deve pedir para o
usuário digitar o IDENTIFICADOR do veículo

-> O Sistema deve verificar se o veículo existe ou não e
mostrar a seguinte mensagem caso o veículo não exista:
"Veículo, não encontrado. O usuário deve voltar para o menu
inicial depois"

-> Se o veículo existir, o sistema deve permitir que o usuário
atualize somente a cor e o preço.
*/

function atualizarVeiculo() {
  const idCarro = parseInt(prompt("digite o id do veiculo a ser atualizado"));
  const posicao = veiculos.findIndex(
    (identificador) => identificador.id === idCarro
  );
  if (posicao === -1) {
    console.log(
      "Veículo, não encontrado. O usuário deve voltar para o menu inicial depois"
    );
    return;
  }

  const novaCor = prompt("digite a nova cor");
  if (novaCor != undefined) {
    veiculos[posicao].cor = novaCor;
  }

  const novoPreco = parseFloat(prompt("digite o novo preco"));
  if (novoPreco != undefined && novoPreco >= 0) {
    veiculos[posicao].preco = novoPreco;
  }
}

/**
 * 5 - Remover veículo
 *
-> Ao entrar nesta opção o sistema deve pedir para o
usuário digitar o IDENTIFICADOR do veículo
-> O Sistema deve verificar se o veículo existe ou não e
mostrar a seguinte mensagem caso o veículo não exista:
"Veículo, não encontrado. O usuário deve voltar para o menu
inicial depois"
-> Se o veículo existir, o sistema deve remover o veículo
 */
function removerVeiculo() {
  const idCarro = parseInt(prompt("digite o id do veiculo a ser atualizado"));
  const posicao = veiculos.findIndex(
    (identificador) => identificador.id === idCarro
  );
  if (posicao === -1) {
    console.log(
      "Veículo, não encontrado. O usuário deve voltar para o menu inicial depois"
    );
    return;
  }

  veiculos.splice(posicao, 1);
}

function inicioCodigo() {
  let opcao = 0;
  do {
    alert(`Bem-vindo ao sistema de CRUD de veículos:

No momento, o sistema tem ${veiculos.length} carros cadastrados

Escolha uma das opções para interagir com o sistema:`);

    opcao = Number(
      prompt(
        `digite a opcao desejada:
      1 - Incluir
      2 - Listar
      3 - Filtrar por Marca
      4 - Atualizar veiculo
      5 - Remover veiculo
      6 - Sair do sistema`
      )
    );

    if (opcao === 1) {
      cadastrarVeiculo();
      console.log(veiculos);
    } else if (opcao === 2) {
      listar(veiculos);
    } else if (opcao === 3) {
      listar(separarPorMarca());
    } else if (opcao === 4) {
      atualizarVeiculo();
    } else if (opcao === 5) {
      removerVeiculo();
    }
  } while (opcao !== 6);
}

inicioCodigo();
