import { Router } from "express";
import { users } from "./database";

// cria um roteador do express para trabalhar com as rotas de um caminho da aplicação
export const carsRoutes = Router();

carsRoutes.get("/", (_, res) => res.json({ message: "rota carros" }));

/**
Esta rota POST é usada para criar um novo carro na API.
Ela espera um CPF como parâmetro na URL e os detalhes do carro no corpo da requisição.
O carro é adicionado à lista de carros do usuário com o CPF correspondente.
Se o usuário não for encontrado, retorna um erro 404.
Retorna o objeto do carro criado.
Ex: http://localhost:8080/cars/00000000011
 */
carsRoutes.post("/:cpf", (req, res) => {
  const { cpf } = req.params;
  const { brand, year, color, model, plate, defects } = req.body;
  const car = {
    brand,
    year,
    color,
    model,
    plate,
    defects,
  };

  const user = users.find((user) => user.cpf === cpf);
  if (!user) {
    return res.status(404).json({
      message: "Usuário não encontrado",
    });
  }
  user.cars.push(car);

  return res.json(car);
});
