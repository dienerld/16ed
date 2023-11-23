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

export abstract class Ingresso {
    constructor(protected valor: number) {}

    imprimirValor() {
        console.log(`O valor é R$${this.valor}`);
    }
}

export class Normal extends Ingresso {}

export class Vip extends Ingresso {
    constructor(valor: number, private valorAdicional: number) {
        super(valor);
    }

    imprimirValor(): void {
        console.log(`Valor somado R$${this.valor + this.valorAdicional}.`);
    }
}

export class Camarote extends Ingresso {
    constructor(valor: number, private valorAdicional: number) {
        super(valor);
    }

    imprimirValor(): void {
        console.log(`Valor somado R$ ${this.valor + this.valorAdicional}`);
    }
}
