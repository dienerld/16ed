const formEl = document.getElementById("form-login");

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userValue = formEl.username.value;
  const userPassword = formEl.password.value;

  const formValue = {
    name: userValue,
    password: userPassword,
  };

  try {
    const response = await api.post("/login", formValue);
    const user = response.data.data;
    sessionStorage.setItem("16ed-user", JSON.stringify(user));
    alert("Logado");
    window.location.href = "./listar-recado.html";
  } catch (error) {
    alert(error.message);
  }
});
