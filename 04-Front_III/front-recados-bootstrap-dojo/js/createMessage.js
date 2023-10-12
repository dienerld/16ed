const form = document.getElementById("form-new-message")
const title = document.getElementById("title")
const description = document.getElementById("description")

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleValue = title.value
  const descriptionValue = description.value
  console.log(titleValue, descriptionValue);

  const userId = localStorage.getItem("userId")

  const newMessage = {
    title: titleValue,
    description: descriptionValue,
    userId
  }

  criarRecados(newMessage)
});

async function criarRecados(newMessage) {
  try {
    const response = await api.post('/messages', newMessage);

    if (response.status === 201) {
      alert('Recado criado com sucesso')
    }

    title.value = ""
    description.value = ""

    window.location.href = "listar-recados.html"

  } catch (error) {
    console.log("Erro ao cadastrar recado: ", error);
  }

}