import { Duelo } from "../types";

export class Guerreiro implements Duelo {
  constructor(
    private nome: string,
    private forca: number,
    private destreza: number,
    private esgrima: boolean
  ) {}

  atacar(adv: Duelo): void {
    const dano = this.forca + this.destreza;
    adv.defender(dano);
  }
  defender(dano: number): void {
    if (this.esgrima) {
      console.log(`defendeu ${dano}`);
    } else {
      console.log(`defendeu ${dano / 3}`);
      this.forca -= dano / 3;
    }
  }
}
