// Captura o form do html
const formEl = document.getElementById("form-new-message");

// adiciona uma função para ser executada quando o evento for disparado
formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Maneira de pegar os valores do formulário (utiliza o id ou nome do input)
  const titleValue = formEl.title.value;
  const descriptionValue = formEl.description.value;

  // cria um objeto com as informações do formulário
  const formValue = {
    title: titleValue,
    description: descriptionValue,
    userId: 1, // utiliza o id do usuário (valor deve ser dinâmico)
  };

  /** Maneira de tratar Promise sem usar async/await
    api
      .post("/tasks", formValue)
      .then((response) => {
        console.log(response);
        alert("Recado adicionado com sucesso!");
      })
      .catch((err) => {
        alert(err.message);
      });

       */
  /* Maneira de tratar Promise usando async/await
    # Try/Catch
      - Tratamento de erro

    * Bloco tray serve para colocar o código que vai tentar executar (execução que esperamos que funcione)
    * Bloco catch serve para tratar o erro que pode ocorrer no bloco try
  */
  try {
    // Faz requisição POST para a API e espera o retorno para saber se a operação foi bem sucedida
    await api.post("/tasks", formValue);

    alert("inserido com sucesso");

    formEl.title.value = "";
    formEl.description.value = "";
  } catch (erro) {
    alert(`nao foi possível inserir recado ${erro.message}`);
  }
});
