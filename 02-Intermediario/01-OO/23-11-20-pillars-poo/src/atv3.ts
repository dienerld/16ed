abstract class Animal {
  #tamanho: number;
  protected barulho: string;

  constructor(protected pelagem: string, tamanho: number, barulho: string) {
    this.barulho = barulho;
    this.#tamanho = tamanho;
  }

  getTamanho() {}
  setTamanho() {}

  get tamanho(): number {
    return this.#tamanho;
  }

  set tamanho(value: number) {
    if (value < 0) {
      console.log("Valor inválido");
      return;
    }
    this.#tamanho = value;
  }

  andar() {
    console.log("andou");
  }

  deitar() {
    console.log("deitou");
  }
}

class Cachorro extends Animal {
  latir() {
    console.log(this.barulho);
  }
}

class Gato extends Animal {
  miado() {
    console.log("miau");
  }
}

class Cavalo extends Animal {
  relinchar() {
    console.log("ihohon");
  }
}

const cachorro = new Cachorro("malhado", 0.8, "auau");
cachorro.latir();
cachorro.tamanho = -20;
console.log(cachorro.tamanho);
