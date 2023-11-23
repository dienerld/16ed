/**
 * 1. Crie uma classe abstrata chamada Ingresso que possui um valor
em reais e um método imprimeValor()
a. crie uma classe Normal, que herda Ingresso..
b. crie uma classe VIP, que herda Ingresso e possui um valor
adicional. Altere o método imprimeValor para mostrar o valor
do ingresso somado com o adicional.
c. crie uma classe Camarote, que herda ingresso e possui um
valor adicional. Altere o método imprimeValor para mostrar o
valor do ingresso somado com o adicional.
 */

class Ingresso {
  constructor(protected valorReais: number) {}

  imprimeValor(): void {
    console.log(`O valor do ingresso é R$${this.valorReais.toFixed(2)}`);
  }
}

class Normal extends Ingresso {}

class Vip extends Ingresso {
  constructor(valor: number, private adicional: number = 1.2) {
    super(valor);
  }

  imprimeValor(): void {
    console.log(
      `O valor do ingresso é R$${(this.valorReais * this.adicional).toFixed(2)}`
    );
  }
}

class Camarote extends Ingresso {
  constructor(valor: number, private adicional: number = 2) {
    super(valor);
  }

  imprimeValor(): void {
    console.log(
      `O valor do ingresso é R$${(this.valorReais * this.adicional).toFixed(2)}`
    );
  }
}

const normal = new Normal(500);
normal.imprimeValor();

const vip = new Vip(500);
vip.imprimeValor();

const camarote = new Camarote(500);
camarote.imprimeValor();
