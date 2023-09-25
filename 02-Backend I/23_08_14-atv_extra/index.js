import {
  createTask,
  deleteTask,
  listTasks,
  updateTask,
  updateTaskStatus,
} from "./tasks.mjs";

const users = [
  {
    username: "Diener",
    password: "passwd",
    tasks: [],
  },
];

// ------------------ User e Login ---------------

function createUser(username, password) {
  if (!username || !password) {
    console.log("Gentileza informar o nome do usuário e/ou a Senha");
    return;
  }
  users.push({ username, password, tasks: [] });
}

function login(username, password) {
  const usuario = users.find((user) => user.username === username);
  if (!usuario) {
    console.log("Usuário não encontrado!");
    return;
  }
  if (usuario.password !== password) {
    console.log("Senha errada.");
    return;
  }
  console.log(usuario);
  return usuario;
}

function managerTasks(user) {
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
        createTask(
          prompt("Digite o título"),
          prompt("Escreva a descrição"),
          user
        );
        break;

      case "2":
        updateTaskStatus(
          parseInt(prompt("Digite o índice da tarefa:")),
          prompt(
            "Se a tarefa foi concluída, digite sim, se não digite não."
          ) === "sim"
            ? true
            : false,
          user
        );
        break;

      case "3":
        updateTask(
          parseInt(prompt("Digite o índice da tarefa:")),
          prompt("Digite o título"),
          prompt("Escreva a descrição"),
          user
        );
        break;

      case "4":
        listTasks(user);
        break;

      case "5":
        let tarefaDeletada = prompt(
          "Qual o index da tarefa que deseja deletar?"
        );
        deleteTask(tarefaDeletada, user);
      default:
        break;
    }
  } while (confirm("Deseja continuar neste usuario?"));
}

function inicio() {
  do {
    switch (prompt("O que deseja fazer: 1 - Cadastro, 2 - Login")) {
      case "1":
        createUser(
          prompt("Digite o nome do usuário"),
          prompt("Digite a senha")
        );
        break;

      case "2":
        const user = login(
          prompt("Digite o nome do usuário"),
          prompt("Digite a senha")
        );
        if (user) {
          managerTasks(user);
        }
        break;

      default:
        break;
    }
  } while (confirm("Deseja continuar"));
}

// inicio do programa
inicio();
