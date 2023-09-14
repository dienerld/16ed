const formEl = document.getElementById("form-new-message");

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  const titleValue = formEl.title.value;
  const descriptionValue = formEl.description.value;

  const formValue = {
    title: titleValue,
    description: descriptionValue,
    userId: 1,
  };

  // api
  //   .post("/tasks", formValue)
  //   .then((response) => {
  //     console.log(response);
  //     alert("Recado adicionado com sucesso!");
  //   })
  //   .catch((err) => {
  //     alert(err.message);
  //   });
  try {
    await api.post("/tasks", formValue);

    alert("inserido com sucesso");

    formEl.title.value = "";
    formEl.description.value = "";
  } catch (erro) {
    alert(`nao foi possível inserir recado ${erro.message}`);
  }
});
