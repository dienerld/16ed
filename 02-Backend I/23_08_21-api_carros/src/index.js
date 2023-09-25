import express from "express";
import { clientRoutes } from "./clients";
import { carsRoutes } from "./cars";

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.json({ message: "servidor rodando!" }));

app.use("/clients", clientRoutes);
app.use("/cars", carsRoutes);

app.listen(8080, () => console.log("Servidor iniciado"));
