const tarefas = [];

function validateIndex(index) {
  return !index || isNaN(index) || index < 0 || index >= tarefas.length;
}

function createTask(title, description) {
  if (title === "" || title === undefined) {
    console.log("O título é obrigatório");
    return;
  }
  tarefas.push({ title: title, description, completed: false });
}

function listTasks() {
  tarefas.forEach((tarefa, index) => {
    console.log(
      `${index} - Título: ${tarefa.title} - Descrição: ${
        tarefa.description
      } - Tarefa completada: ${tarefa.completed ? "Sim" : "Não"}`
    );
  });
}

function updateTaskStatus(index, completed) {
  if (validateIndex(index)) {
    console.log("Índice não encontrado!");
    return;
  }

  tarefas[index].completed = completed;
}

function updateTask(index, newTitle, newDescription) {
  if (validateIndex(index)) {
    console.log("Índice não encontrado!");
    return;
  }

  if (!newTitle) {
    console.log("O título é obrigatório");
    return;
  }

  tarefas[index].title = newTitle;
  tarefas[index].description = newDescription;
}

function deleteTask(index) {
  if (validateIndex(index)) {
    console.log("Índice não encontrado!");
    return;
  }

  tarefas.splice(index, 1);
}

// ---------------- Inicio do código --------------------

do {
  switch (
    prompt(`Digite uma opção:
1 - Cadastrar tarefa
2 - Atualizar status tarefa
3 - Atualizar tarefa
4 - Listar tarefas
5 - Excluir tarefa
`)
  ) {
    case "1":
      createTask(prompt("Digite o título"), prompt("Escreva a descrição"));
      break;

    case "2":
      updateTaskStatus(
        parseInt(prompt("Digite o índice da tarefa:")),
        prompt("Se a tarefa foi concluída, digite sim, se não digite não.") ===
          "sim"
          ? true
          : false
      );
      break;

    case "3":
      updateTask(
        parseInt(prompt("Digite o índice da tarefa:")),
        prompt("Digite o título"),
        prompt("Escreva a descrição")
      );
      break;

    case "4":
      listTasks();
      break;

    case "5":
      let tarefaDeletada = prompt("Qual o index da tarefa que deseja deletar?");
      deleteTask(tarefaDeletada);
    default:
      break;
  }
} while (confirm("Deseja continuar cadastrando?"));
