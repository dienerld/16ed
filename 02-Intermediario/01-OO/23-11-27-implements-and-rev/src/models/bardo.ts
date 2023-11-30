import { Duelo } from "../types";

type Musica = {
  rock?: string;
  pop: string;
  sertanejo: string;
};

export class Bardo implements Duelo {
  vida: number = 100;
  private musica: Musica;
  constructor(
    private nome: string,
    private forca: number,
    private destreza: number,
    musica: Omit<Required<Musica>, "pop">
  ) {
    this.musica = musica;
  }

  atacar(adv: Duelo): number {
    const dano = this.forca + this.destreza;
    adv.defender(dano);
    return dano;
  }
  defender(dano: number): void {
    if (this.musica) {
      this.forca -= dano / 2;
      console.log(`defendeu ${dano / 2}`);
    } else {
      console.log(`defendeu ${dano}`);
    }
  }
}
