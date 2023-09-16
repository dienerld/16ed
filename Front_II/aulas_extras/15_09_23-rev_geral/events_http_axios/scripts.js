// config Axios
const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});
//
const formEl = document.getElementById("request-api");
const containerListEl = document.getElementById("container-list");
formEl.addEventListener("submit", submitRequestApi);
let currentPage = 1;
async function submitRequestApi(e) {
  e.preventDefault();
  let endpoint = "/character";

  const characterId = formEl["character-id"].value.trim(); //trim() serve para remover espaços em branco antes e depois do conteúdo
  const characterName = formEl["character-name"].value.trim();
  const characterStatus = formEl["character-status"].value.trim();
  const page = formEl.page.value;

  if (characterId) {
    endpoint += `/${characterId}`;
  } else {
    if (characterName || characterStatus || page) endpoint += "?";
    const arrQueries = [];
    if (characterName) arrQueries.push(`name=${characterName}`);
    if (characterStatus) arrQueries.push(`status=${characterStatus}`);
    if (page) arrQueries.push(`page=${page}`);

    endpoint += arrQueries.join("&&");
  }
  const { data } = await api.get(endpoint);

  const content = data.results ?? data;
  // let content;
  // if (characterId) {
  //   content = data;
  // } else {
  //   content = data.results;
  // }

  console.log(content);
}

async function requestApiPerPage(option) {
  // exp booleana ? caso dê verdade : caso dê falso
  option === "next" ? currentPage++ : currentPage--;
  const { data } = await api.get("/character?page=" + currentPage);

  containerListEl.innerHTML = "";
  data.results.forEach((element) => {
    const pEl = document.createElement("p");
    pEl.innerHTML = element.name;
    containerListEl.appendChild(pEl);
  });
}
requestApiPerPage();
