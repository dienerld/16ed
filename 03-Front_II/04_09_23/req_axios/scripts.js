const api = axios.create({
  baseURL: "https://reqres.in/api",
});
const userContainer = document.querySelector(".user-list");
const currentPageEl = document.getElementById("current-page");
const totalUsersEl = document.getElementById("total-users");
const btnPrevious = document.getElementById("btn-previous");
const btnNext = document.getElementById("btn-next");

let totalPages = 0;
let currentPage = 1;

async function getUsers() {
  const response = await api.get("/users?page=" + currentPage);
  const body = response.data;
  const users = body.data;

  currentPage = body.page;
  totalPages = body.total_pages;

  totalUsersEl.innerText = `Total users: ${totalPages}`;
  currentPageEl.innerText = `Pagina Atual: ${currentPage}`;

  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");

    userCard.innerHTML = `
        <img src="${user.avatar}" alt="">
        <h2>${user.first_name} ${user.last_name}</h2>
        <p>${user.email}</p>
      `;
    userContainer.appendChild(userCard);
  });

  setStateButtons();
}

async function nextPage() {
  console.log();
  if (currentPage + 1 > totalPages) {
    alert("Pagina não existe");
    return;
  }
  currentPage++;
  userContainer.innerHTML = "";
  await getUsers();
}

function setStateButtons() {
  if (currentPage === totalPages) {
    btnNext.setAttribute("disabled", true);
  } else {
    btnNext.removeAttribute("disabled");
  }

  if (currentPage === 1) {
    btnPrevious.setAttribute("disabled", true);
  } else {
    btnPrevious.removeAttribute("disabled");
  }
}

setStateButtons();
