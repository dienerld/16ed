/**
 * 
                    Animal
        Cachorro    Cavalo      Gato
  3 - Identifique os atributos e comportamentos que são comuns entre os 3 animais 
  e encapsule-os na superclasse Animal. 
  Crie pelo menos 1 comportamento diferente para cada animal.

  -- 1 classe abstrata com atributos e comportamentos comuns dos 3 animais;
  -- 3 classes  (Cachorro, Cavalo e Gato) cada uma com pelo menos um comportamento 
  coisas comuns:
    - patas;
    - ;
    -

    constructor(public|private|protected nomeDoAtributo: ) {}
//public 
    const anima1 = new Animal();
    animal1.altura = 100;

//private 
    const anima1 = new Animal();
    animal1.altura = 100;
    getters
    setters

// protected
    quem herda de Animal consegue acessar;
    Porém, de fora da classe que herda não possível



 */

export abstract class Animal {
  constructor(protected patas: number, protected raca: string, protected idade: number) { }

  andar() {
    console.log("Animal andou");
  }

  comer() {
    console.log("Animal comeu");
  }

  dormir() {
    console.log("Animal dormiu");
  }
}

export class Cachorro extends Animal {
  constructor(patas: number, raca: string, idade: number) {
    super(patas, raca, idade);
  }

  latir() {
    console.log("Au Au");
  }
}

export class Cavalo extends Animal{
    constructor(patas:number, raca:string, idade:number) {
        super(patas, raca, idade);
    }

    relinchar(){
        console.log("ieen ieen Hiin in in");
    }
}

export class Gato extends Animal{
    constructor(patas:number, raca:string, idade:number) {
        super(patas, raca, idade);
    }

    miar(){
        console.log("miau");
    }
}

