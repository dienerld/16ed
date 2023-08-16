const express = require("express");

const app = express();
app.use(express.json());

const users = [];

app.get("/users", (req, res) => {
  return res.json({ users });
});

app.post("/users", (req, res) => {
  const { body } = req;

  if (!body.name) {
    return res.status(500).json({
      success: false,
      message: "erro desconhecido, problema do servidor",
    });
  }

  if (!body.age) {
    return res.status(400).json({
      success: false,
      message: "campo age é obrigatório",
    });
  }

  const user = {
    id: users.length + 1,
    name: body.name,
    age: body.age ? body.age : 0,
  };
  users.push(user);

  return res.status(201).json({
    success: true,
    message: "Usuário cadastrado com sucesso",
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
    message: "Usuario atualizado com sucesso",
    data: users[userIndex],
  });
});

app.listen(8080, () => {
  console.log("server running in http://localhost:8080/");
});
