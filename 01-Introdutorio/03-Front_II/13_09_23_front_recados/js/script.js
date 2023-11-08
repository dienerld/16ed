const listaDeRecados = document.querySelector(".messages-list");
/**
 @description - Busca no sessionStorage a informação previamente salva que contém o usuário logado e suas informações
 @returns - Retorna a informação salva ou null caso não encontre a chave enviada salva na storage
 */
const sessionStorageData = sessionStorage.getItem("16ed-user");
/**
 @description - Pega o valor da variável **sessionStorageData** e transforma em um objeto do **JS**. Caso nenhum valor seja encontrado, retorna um objeto vazio
 @description - o JSON.parse() é um método que transforma um texto JSON em um objeto JavaScript e sempre deve ser passado algum parâmetro para ele, caso não passe ele tera um erro
 @returns - Retorna um objeto JS
 */

const dataJson = JSON.parse(sessionStorageData || "{}");

document.getElementById("name").innerText = dataJson.name;

dataJson.tasks.forEach((element) => {
  const mostrarRecado = document.createElement("div");
  mostrarRecado.classList.add("card");

  mostrarRecado.innerHTML = `
        <h2 class="card-title">${element.title}</h2>
        <p class="card-description">${element.description}</p>
        <div class="card-icons">
          <i class="fas fa-edit" data-id="${element.id}"></i>
          <i class="fas fa-trash" data-id="${element.id}"></i>
        </div>
        `;
  listaDeRecados.appendChild(mostrarRecado);
});
