import { Bardo } from "./models/bardo";
import { Paladino } from "./models/paladino";
import { Guerreiro } from "./models/guerreiro";
import { Duelo } from "./types";

const paladino = new Paladino("Paladino", 10, 10, "");
const guerreiro = new Guerreiro("Guerreiro", 10, 10, true);
const bardo = new Bardo("Bardo", 10, 10, {});

function duelar(p1: Duelo, p2: Duelo) {
  p1.atacar(p2);
  p2.atacar(p1);
}

console.log(paladino);
console.log(guerreiro);
duelar(paladino, bardo);
console.log(paladino);
console.log(guerreiro);
// duelar(paladino, bardo);
