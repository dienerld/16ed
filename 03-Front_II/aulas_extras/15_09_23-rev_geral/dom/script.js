const containerEl = document.getElementById("container");
let count = 0;
function appendEl() {
  const newEl = document.createElement("p");
  newEl.setAttribute("onclick", `selfDelete(${count})`);

  newEl.setAttribute("id", `p-${count}`);

  newEl.innerText = `filho ${count}`;
  count++;
  containerEl.appendChild(newEl);
}

function deleteEl() {
  const id = document.getElementById("delete-id").value;
  console.log(id);
  containerEl.removeChild(document.getElementById(`p-${id}`));
}

function selfDelete(id) {
  document.getElementById(`p-${id}`).remove();
}
