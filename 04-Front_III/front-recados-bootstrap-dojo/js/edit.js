const form = document.getElementById("form-edit-message");
const title = document.getElementById("title-edit")
const description = document.getElementById("description-edit")

const urlParams = new URLSearchParams(window.location.search)
const messageId = urlParams.get("id");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleValue = title.value
  const descriptionValue = description.value
  console.log(titleValue, descriptionValue);

  const newMessage = {
    title: titleValue,
    description: descriptionValue,
    messageId
  }

  editarRecado(newMessage)
});

async function editarRecado(newMessage) {
  try {
    const response = await api.put(`/messages/${messageId}`, newMessage);

    if (response.status === 201) {
      alert('Recado atualizado com sucesso')
    }

    title.value = ""
    description.value = ""

    window.location.href = "listar-recados.html"

  } catch (error) {
    console.log("Erro ao cadastrar recado: ", error);
  }

}