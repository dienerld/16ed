function validateIndex(index, user) {
  return !index || isNaN(index) || index < 0 || index >= user.tasks.length;
}

export function createTask(title, description, user) {
  if (title === "" || title === undefined) {
    console.log("O título é obrigatório");
    return;
  }
  user.tasks.push({ title: title, description, completed: false });
}

export function listTasks(user) {
  user.tasks.forEach((tarefa, index) => {
    console.log(
      `${index} - Título: ${tarefa.title} - Descrição: ${
        tarefa.description
      } - Tarefa completada: ${tarefa.completed ? "Sim" : "Não"}`
    );
  });
}

export function updateTaskStatus(index, completed, user) {
  if (validateIndex(index, user)) {
    console.log("Índice não encontrado!");
    return;
  }

  user.tasks[index].completed = completed;
}

export function updateTask(index, newTitle, newDescription, user) {
  if (validateIndex(index, user)) {
    console.log("Índice não encontrado!");
    return;
  }

  if (!newTitle) {
    console.log("O título é obrigatório");
    return;
  }

  user.tasks[index].title = newTitle;
  user.tasks[index].description = newDescription;
}

export function deleteTask(index, user) {
  if (validateIndex(index, user)) {
    console.log("Índice não encontrado!");
    return;
  }

  user.tasks.splice(index, 1);
}
