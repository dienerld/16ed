const listaDeRecados = document.querySelector('.messages-list');

const userId = localStorage.getItem("userId")

async function editarRecado(messageId) {
  try {
    await api.put(`/messages/${messageId}`)
  } catch (error) {
    console.log('Erro no delete!');
  }
}


async function deletarRecado(messageId) {
  try {
    await api.delete(`/messages/${messageId}`)
  } catch (error) {
    console.log('Erro no delete!');
  }
}

async function listarRecados() {
  try {
    const response = await api.get(`/messages/${userId}`)
    const buscarRecados = response.data

    buscarRecados.forEach(buscarRecado => {
      const mostrarRecado = document.createElement('div');
      mostrarRecado.classList.add('card');

      console.log(buscarRecado)

      mostrarRecado.innerHTML = `
        <h2 class="card-title">${buscarRecado.title}</h2>
        <p class="card-description">${buscarRecado.description}</p>
        <div class="card-icons">
          <i class="fas fa-edit" data-id="${buscarRecado.id}"></i>
          <i class="fas fa-trash" data-id="${buscarRecado.id}"></i>
        </div>
        `
      listaDeRecados.appendChild(mostrarRecado)

      const iconDelete = mostrarRecado.querySelector('.fa-trash')

      iconDelete.addEventListener(('click'), function () {
        const messageId = iconDelete.getAttribute('data-id')
        deletarRecado(messageId)
      })
      const iconEdit = mostrarRecado.querySelector('.fa-edit');

      iconEdit.addEventListener("click", () => {
        const messageId = iconEdit.getAttribute('data-id')
        window.location.href = `editar-recado.html?id=${messageId}`
      })
    })


  } catch (error) {
    console.log(`Erro ao buscar: ${error}`)
  }
}

listarRecados()