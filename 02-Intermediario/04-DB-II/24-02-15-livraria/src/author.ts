import { Router } from "express";
import { prisma } from "./database/prisma";

export const authorRoutes = Router();

authorRoutes.get('/', async (req, res) => {

  // buscar do banco
  const authors = await prisma.author.findMany()

  return res.json({
    message: "Autores retornados com sucesso",
    data: authors
  })
})

authorRoutes.post("/", async (req, res) => {
  const { name } = req.body
  try {
    const authorExists = await prisma.author.findUnique({
      where: { name }
    })

    if (authorExists) {
      return res.status(409).json({
        field: "name",
        message: "Autor já cadastrado"
      })
    }

    // cadastrar autor no banco de dados

    const newAuthor = await prisma.author.create({
      data: {
        name
      }
    })

    return res.status(201).json({
      message: "Novo autor cadastrado com sucesso",
      data: newAuthor
    })
  } catch (err) {
    return res.status(500).json({
      message: "Erro ao cadastrar autor",
      error: err
    })
  }
})
