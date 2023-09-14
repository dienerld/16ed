const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const users = [];

app.get("/users", (req, res) => {
  return res.json({ users });
});

app.post("/users", (req, res) => {
  const { body } = req;

  if (!body.name) {
    return res.status(400).json({
      success: false,
      message: "Usuário não foi informado",
    });
  }

  if (!body.password) {
    return res.status(400).json({
      success: false,
      message: "Senha não foi informada",
    });
  }

  const userRepeat = users.find((user) => user.name === body.name);
  if (userRepeat) {
    return res.status(400).json({
      success: false,
      message: "Usuário já existente!",
    });
  }

  const user = {
    id: users.length + 1,
    name: body.name,
    password: body.password,
    tasks: [],
  };
  users.push(user);

  return res.status(201).json({
    success: true,
    message: "Usuário cadastrado com sucesso",
    data: user,
  });
});

app.post("/login", (req, res) => {
  const { body } = req;
  const user = users.find((user) => user.name === body.name);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Usuário não localizado!",
    });
  }

  if (user.password !== body.password) {
    return res.status(400).json({
      success: false,
      message: "Senha incorreta!",
    });
  }

  return res.status(200).json({
    success: true,
    message: `Usuário encontrado!`,
    data: user,
  });
});

// update users
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const userIndex = users.findIndex((user) => user.id === Number(id));
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Usuario nao encontrado",
    });
  }

  users[userIndex] = {
    ...users[userIndex],
    ...body,
  };

  return res.status(200).json({
    success: true,
    message: "Usuário atualizado com sucesso",
    data: users[userIndex],
  });
});

// tasks

app.post("/tasks", (req, res) => {
  // const body = req.body
  // const title = req.body.title
  const { title, description, userId } = req.body; // desestruturação

  if (!title || !description) {
    return res.status(400).json({
      success: false,
      message: "Por favor preencha o título e a descrição!",
    });
  }

  const user = users.find((user) => user.id === userId);
  const task = {
    id: user.tasks.length,
    title: title,
    description: description,
    completed: false,
  };
  user.tasks.push(task);

  return res.status(200).json({
    success: true,
    message: "Task cadastrada com sucesso!",
    data: task,
  });
});

app.listen(8080, () => {
  console.log("server running in http://localhost:8080/");
});
