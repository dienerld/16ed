function editarCard() {
  alert("Clicou em editar");
}

function apagarCard() {
  if (confirm("Tem certeza da exclusão do card?")) {
    alert("Confirmado!");
  } else {
    alert("Cancelou!");
  }
}

const arrCards = document.querySelectorAll(".card");

// arrCards.forEach((card) => {
//   card.style.backgroundColor = "#e07137";
// });

for (const card of arrCards) {
  card.style.backgroundColor = "#e07137";
}

const arrTitleCard = document.querySelectorAll(".titulo-card");
arrTitleCard.forEach((tituloCard) => {
  tituloCard.innerText = "Meu Card";
  tituloCard.style.color = "#2b385b";
});

const arrCardDescription = document.querySelectorAll(".descricao-card");
for (const description of arrCardDescription) {
  description.innerText = "Descrição modificada pelo JavaScript";
  description.style.color = "white";
}

const arrBtnEdit = document.querySelectorAll(".botao-editar");
arrBtnEdit.forEach((button) => {
  button.style.backgroundColor = "#338106";
  button.style.padding = "6px";
  button.style.border = "none";
  button.style.borderRadius = "10px";
  button.style.color = "white";
  button.style.marginTop = "30px";

  button.setAttribute("onClick", "editarCard()");
});

const arrBtnDelete = document.querySelectorAll(".botao-apagar");
arrBtnDelete.forEach((button) => {
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
  button.setAttribute("onClick", "apagarCard()");
});
