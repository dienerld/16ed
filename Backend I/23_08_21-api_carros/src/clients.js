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
    // Remove caracteres não numéricos do CPF
    req.body.cpf = cpf.replace(/[^0-9]/g, "");
    // continua a requisição para o proximo middleware ou função final(também é um middleware)
    next();
  },
  (req, res) => {
    const { name, phone, address, cpf } = req.body;

    const user = { name, address, phone, cpf, cars: [] };
    users.push(user);

    return res.json({ data: user });
  }
);

/**
 * Este trecho de código define uma rota para a requisição GET com um parâmetro dinâmico ":cpf".
 * Ele recupera o valor do "cpf" a partir dos parâmetros da requisição.
 * Em seguida, ele procura por um usuário com um valor de "cpf" correspondente no array "users".
 * Se nenhum usuário for encontrado, ele retorna um status 404 com uma resposta JSON indicando que o usuário não foi encontrado.
 * Se um usuário for encontrado, ele retorna uma resposta JSON com uma mensagem de sucesso e os dados do usuário.
 */

clientRoutes.get("/:cpf", (req, res) => {
  const { cpf } = req.params;
  const user = users.find((user) => user.cpf === cpf);
  if (!user) {
    return res.status(404).json({
      message: "Usuário não encontrado",
    });
  }
  return res.json({ message: "rota cliente único", data: user });
});

export { clientRoutes };
