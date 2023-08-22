import { Router } from "express";
import { users } from "./database";
export const carsRoutes = Router();

carsRoutes.get("/", (_, res) => res.json({ message: "rota carros" }));
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
