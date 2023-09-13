const formEl = document.getElementById("form-rev");

// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const nameEl = document.querySelector("#name");
//   const valueEl = document.querySelector("#value");
//   const radioEl = document.querySelector("input[type=radio]:checked");
//   const checkboxesEl = document.querySelectorAll(
//     "input[type=checkbox]:checked"
//   );

//   let valueCheckBox = [];
//   checkboxesEl.forEach((i) => {
//     valueCheckBox.push(i.value);
//   });

//   if (!nameEl.value) {
//     nameEl.classList.add("error");
//     return;
//   }

//   console.log(`${nameEl.value}
//   ${valueEl.value}
//   ${radioEl.value}
//   ${valueCheckBox}`);
// });

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameEl = formEl.name
  const valueEl = formEl.value
  const radioEl = formEl.radio
  const checkboxesEl = document.querySelectorAll(
    "input[type=checkbox]:checked"
  );

  let valueCheckBox = [];
  checkboxesEl.forEach((i) => {
    valueCheckBox.push(i.value);
  });

  if (!nameEl.value) {
    nameEl.classList.add("error");
    return;
  }

  console.log(`${nameEl.value}
  ${valueEl.value}
  ${radioEl.value}
  ${valueCheckBox}`);
});
