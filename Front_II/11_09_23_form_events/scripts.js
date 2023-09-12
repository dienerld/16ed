const form = document.getElementById("form");
const submit = document.getElementById("submit");

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

  checkBoxes.forEach((checkBox) => {
    arrBoxes.push(checkBox.value);
  });

  const person = {
    name,
    address,
    city,
    state,
  };

  const dataProf = {
    nature,
    area: arrBoxes,
    mini,
  };

  console.log({
    person,
    dataProf,
  });
});

function test(...args) {
  console.log(args);
  alert(`${args.join(" - ")}`);
}
