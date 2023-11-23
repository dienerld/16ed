/**
 * 2. Crie a classe Imovel, que possui um endereço e um preço.
a. crie uma classe Novo, que herda Imovel e possui um adicional
no preço. Crie métodos de acesso e impressão deste valor
adicional.
b. crie uma classe Velho, que herda Imovel e possui um desconto
no preço. Crie métodos de acesso e impressão para este
desconto.
 */

abstract class Imovel {
  constructor(protected endereco: string, protected preco: number) {}

  abstract printInfo(): void;
}

class NovoImovel extends Imovel {
  constructor(endereco: string, preco: number, adicionalPreco: number) {
    super(endereco, preco + adicionalPreco);
  }

  printInfo(): void {
    console.log("Imovel Novo");
  }
}

class VelhoImovel extends Imovel {
  constructor(endereco: string, preco: number, descPreco: number) {
    super(endereco, preco - descPreco);
  }

  printInfo(): void {
    console.log("Imovel velho");
  }
}

const casa: Imovel = new NovoImovel("avenida 2", 50000, 45000);
casa.printInfo();

const casaV = new VelhoImovel("avenida 1", 25000, 5000);
casaV.printInfo();
