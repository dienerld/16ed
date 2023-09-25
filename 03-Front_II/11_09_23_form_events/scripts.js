const form = document.getElementById("form");
const submit = document.getElementById("submit");

const KEY_STORAGE = "16ed-23-09-11";

function saveData(data) {
  const storageStr = localStorage.getItem(KEY_STORAGE) || "[]";
  const storage = JSON.parse(storageStr);

  storage.push(data);

  localStorage.setItem(KEY_STORAGE, JSON.stringify(storage));
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.name.value;
  const address = form.address.value;
  const city = form.city.value;
  const state = form.state.value;

  const nature = form.jobNature.value;
  const mini = form.miniCurriculo.value;

  const checkBoxes = document.querySelectorAll(
    '#infosBox>input[type="checkbox"]:checked'
  );

  const arrBoxes = [];

  if (checkBoxes.length == 0) {
    alert("precisa marcar um checkbox");
    return;
  }

  checkBoxes.forEach((checkBox) => {
    arrBoxes.push(checkBox.value);
  });

  const person = {
    name,
    address,
    city,
    state,
    dataProf: {
      nature,
      area: arrBoxes,
      mini,
    },
  };

  saveData(person);
});

function test(...args) {
  console.log(args);
  alert(`${args.join(" - ")}`);
}
