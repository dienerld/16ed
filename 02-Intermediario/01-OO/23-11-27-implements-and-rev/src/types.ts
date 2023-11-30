export interface Duelo {
  vida: number;
  atacar(adv: Duelo): number;
  defender(dano: number): void;
}

export interface Voa {
  voar(): void;
}
