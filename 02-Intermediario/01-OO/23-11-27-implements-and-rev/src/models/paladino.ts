import { Duelo, Voa } from "../types";

export class Paladino implements Duelo, Voa {
  vida: number = 100;
  constructor(
    private nome: string,
    private forca: number,
    private destreza: number,
    private magia: string
  ) {}
  voar(): void {
    throw new Error("Method not implemented.");
  }
  atacar(adv: Duelo): void {
    const dano = this.forca + this.destreza;
    adv.defender(dano);
  }

  defender(dano: number): void {
    if (this.magia === "cura") {
      console.log(`defendeu ${dano}`);
    } else {
      console.log(`defendeu ${dano / 2}`);
      this.forca -= dano / 2;
    }
  }
}
