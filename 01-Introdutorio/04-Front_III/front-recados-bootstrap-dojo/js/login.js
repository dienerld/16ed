// Capturar elementos do formulário de login
const formLogin = document.getElementById("form-login")
const emailInput = document.getElementById("email-login")
const passwordInput = document.getElementById("password-login")

// Adicionar evento de envio do formulário de login
formLogin.addEventListener("submit", async (e) => {
  e.preventDefault() // Impedir o envio padrão do formulário

  // Obter os valores dos campos de entrada
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  const data = {
    email: emailValue,
    password: passwordValue,
  }

  try {
    // Enviar os dados para o servidor
    const response = await api.post("/users/login", data);

    // Verificar se a resposta foi bem-sucedida
    if (response.status === 200) {
      const userData = response.data

      localStorage.setItem("userId", userData.userId)
      // Login bem-sucedido, redirecionar para a página principal ou outra página desejada
      window.location.href = "/listar-recados.html";
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
  }
});
