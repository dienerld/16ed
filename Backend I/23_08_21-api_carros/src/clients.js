import { Router } from "express";
import { users } from "./database";
const clientRoutes = Router();

clientRoutes.get("/", (_, res) =>
  res.json({ message: "rota cliente", data: users })
);

clientRoutes.post(
  "/",
  (req, res, next) => {
    const { cpf } = req.body;
    req.body.cpf = cpf.replace(/[^0-9]/g, "");
    next();
  },
  (req, res) => {
    const { name, phone, address, cpf } = req.body;

    const user = { name, address, phone, cpf, cars: [] };
    users.push(user);

    return res.json({ data: user });
  }
);
clientRoutes.get("/:cpf", (req, res) => {
  const { cpf } = req.params;
  console.log("cpf ->", cpf);
  const user = users.find((user) => user.cpf === cpf);
  if (!user) {
    return res.status(404).json({
      message: "Usuário não encontrado",
    });
  }
  return res.json({ message: "rota cliente unico", data: user });
});

export { clientRoutes };
