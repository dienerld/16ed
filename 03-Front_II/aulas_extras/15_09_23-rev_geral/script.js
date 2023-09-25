const formEl = document.querySelector("#form");

const usernameEl = formEl.username;
usernameEl.setCustomValidity("Nome de usuário inválido.");
// usernameEl.addEventListener("input", (e) => {
//   usernameEl.setCustomValidity("");
//   usernameEl.checkValidity();
//   console.log(usernameEl.checkValidity());
// });

// usernameEl.addEventListener("invalid", () => {
// });
