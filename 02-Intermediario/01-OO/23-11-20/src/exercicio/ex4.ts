/**
Crie as seguintes classes:
    Crie uma classe chamada Universidade, que terá como atributos: nome e local. 
    Além disso, deve possuir um método construtor e métodos para encapsulamento dos seus atributos.
    Uma classe chamada Pessoa, com os atributos: nome e data de nascimento (que pode ser String). 
    Assim como na outra classe, crie um método construtor e métodos para encapsulamento de seus atributos.
    Cada pessoa poderá estar associada a uma universidade.
    A classe pessoa deve possuir um método que informe seus atributos e a universidade em que trabalha.


  -- Classe universidade com 2 atributos (nome e local) - 
      construtor e utilizar encapsulamento dos atributos;

  -- Classe Pessoa com atributos (nome e data de nascimento (pode ser string)); 
      com método que informe atributos e universidade que trabalha

 */

export class Universidade {
  constructor(private _nome: string, private _local: string) { }
  public get nome() { return this._nome }
  public get local() { return this._local }

}

export class Pessoa {
  constructor(
    protected _nome: string,
    protected _dataNascimento: string,
    private _universidade: Universidade,
  ) { }

  public get nome() { return this._nome }
  public get dataNascimento() { return this._dataNascimento }
  public get universidade() { return this._universidade }


  // Um método que informe seus atributos e a universidade em que trabalha
  /**Documentando função
   * - Teste 1
   * - Teste 2
   * - Teste 3
   */
  imprimirInformacoes() {
    console.log(`nome: ${this.nome}`);
    console.log(`data nascimento: ${this.dataNascimento}`);
    console.log(`universidade: ${this.universidade.nome}`);
  }
}