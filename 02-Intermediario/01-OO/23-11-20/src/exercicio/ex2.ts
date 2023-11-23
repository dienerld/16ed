/*
Crie a classe Imovel, que possui um endereço e um preço.

crie uma classe Novo, que herda Imovel e possui um adicional no preço.
Crie métodos de acesso e impressão deste valor adicional.

crie uma classe Velho, que herda Imovel e possui um desconto no preço. 
Crie métodos de acesso e impressão para este desconto.

*/

interface ImovelInterface {
    endereco: string;
    preco: number;
    imprimirValor: (desconto?: number) => void;
}

export class Imovel implements ImovelInterface {
    constructor(private _endereco: string, public preco: number) {}

    public get endereco() {
        return this._endereco;
    }

    public set endereco(endereco: string) {
        this._endereco = endereco;
    }

    public getEndereco() {
        return this._endereco;
    }

    public setEndereco(endereco: string) {
        this._endereco = endereco;
    }

    // getter
    public getPreco() {
        // ...

        return this.preco;
    }

    public imprimirValor(desconto?: number) {
        console.log(`O valor do imovel é RS${this.preco - (desconto ?? 0)},00`);
    }
}

export class Novo extends Imovel {
    constructor(
        endereco: string,
        preco: number,
        private precoAdicional: number
    ) {
        super(endereco, preco);
    }

    public imprimirValor(): void {
        super.imprimirValor(-this.precoAdicional);
    }
}

export class Velho extends Imovel {
    constructor(endereco: string, preco: number, public precoDesconto: number) {
        super(endereco, preco);
    }

    public imprimirValor(): void {
        super.imprimirValor(this.precoDesconto);
    }
}
