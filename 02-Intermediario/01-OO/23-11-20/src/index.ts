import express, { Request, Response } from "express";
import { Aluno } from "./aluno/aluno";

const server = express();

server.listen(3333, () => {
    console.log("API is running.");
});

// http://localhost:3333
