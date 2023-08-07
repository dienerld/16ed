// array com 10 nomes
const arr = [
  "João",
  "Maria",
  "Lucas",
  "Ana",
  "Julia",
  "Growdev",
  "Marcos",
  "Pedro",
  "Gilberto",
  "Eduarda",
];

function nameStartCharacter(name) {
  return name.startsWith("J");
}

// // filtrando pela 1a letra do nome
const filtered = arr.filter(function (item) {
  return item.startsWith("P");
});

// let namesFiltered = [];
// for (const name of arr) {
//   if (nameStartCharacter(name)) namesFiltered.push(name);
// }

console.log(filtered);
console.log("--------------------------------");

const founded = arr.find(function (name) {
  return name === "Growdev";
});

console.log("encontrado:", founded);

console.log("--------------------------------");
console.log("Lista forEach");
arr.forEach(function (item, position) {
  item += " " + position;
  console.log(item);
});

// for (const item of arr) {
//   console.log(item);
// }

console.log("--------------------------------");

const novoName = "Growdev".split("");
console.log(novoName);
novoName.splice(2, 1);
console.log(novoName.join(""));
