function editarCard(index) {
  const textoDesejado = prompt("Digite o novo título");
  arrTitleCard[index].textContent = textoDesejado;
}

function apagarCard(index) {
  if (confirm("Tem certeza da exclusão do card?")) {
    arrCards[index].remove();
  } else {
    alert("Cancelou!");
  }
}
const container = document.querySelector("#container");
const arrCards = document.querySelectorAll(
  ".card"
);

// arrCards.forEach((card) => {
//   card.style.backgroundColor = "#e07137";
// });

for (const card of arrCards) {
  card.style.backgroundColor = "#e07137";
}

const arrTitleCard = document.querySelectorAll(
  ".titulo-card"
) ;
arrTitleCard.forEach((tituloCard) => {
  tituloCard.innerText = "Meu Card";
  tituloCard.style.marginTop = "20px";
  tituloCard.style.color = "#2b385b";
});

const arrCardDescription = document.querySelectorAll(".descricao-card");
for (const description of arrCardDescription) {
  description.style.marginTop = "20px";
  description.innerText = "Descrição modificada pelo JavaScript";
  description.style.color = "white";
}

const arrBtnEdit = document.querySelectorAll(".botao-editar");
arrBtnEdit.forEach((button, index) => {
  button.style.backgroundColor = "#338106";
  button.style.padding = "6px";
  button.style.border = "none";
  button.style.borderRadius = "10px";
  button.style.color = "white";
  button.style.marginTop = "30px";

  button.setAttribute("onClick", `editarCard(${index})`);
});

const arrBtnDelete = document.querySelectorAll(".botao-apagar");
arrBtnDelete.forEach((button, index) => {
  button.setAttribute(
    "style",
    `
        background-color: #f8433f;
        padding: 6px;
        border: 0;
        border-radius: 10px;
        margin-top: 30px;
        `
  );
  button.setAttribute("onClick", `apagarCard(${index})`);
});
