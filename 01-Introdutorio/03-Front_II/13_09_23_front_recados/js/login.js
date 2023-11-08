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
    // faz a requisição POST para a API enviando via body o objeto que a API espera receber para executar a ação desejada (neste caso login)
    /**
     - Como é uma requisição de login, é esperado algum retorno da API para identificar que a pessoa está autorizada a prosseguir
     - Por precisarmos de um retorno, nós salvamos o que a api retorna em uma variável, comumente chamada "response" (caso salve toda a resposta do axios, pode fazer desestruturação de objeto inline)
     @example const response = await api.post("/login", formValue);

    @description - neste exemplo, para obter o retorno da API, basta usar o método "data" do objeto "response" que é onde está salvo o conteúdo que a api enviou
    */
    const response = await api.post("/login", formValue);
    const user = response.data.data;

    /**
     - **Salva o usuário no sessionStorage**
     - **SessionStorage ou LocalStorage** é uma forma de armazenar dados na página

     - Utilizado para conseguir compartilhar informações entra as paginas html, e sendo utilizado para evitar que seja necessário a cada reload ou mudança de pagina seja feita um nova requisição para a API
    */
    sessionStorage.setItem("16ed-user", JSON.stringify(user));
    alert("Logado");
    window.location.href = "./listar-recado.html";
  } catch (error) {
    alert(error.message);
  }
});
