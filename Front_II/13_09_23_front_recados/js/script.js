const sessionStorageData = sessionStorage.getItem("16ed-user");
const dataJson = JSON.parse(sessionStorageData || "{}");
const listaDeRecados = document.querySelector(".messages-list");

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
