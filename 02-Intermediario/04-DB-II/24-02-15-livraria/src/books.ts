import { Router } from "express";
import { prisma } from "./database/prisma";
import { Book } from "@prisma/client";


const formatDate = Intl.DateTimeFormat('pt-BR', {
  year: 'numeric',
}).format

export const bookRoutes = Router();

function mapToDto(entity: Book) {
  return {
    title: entity.title,
    genre: entity.genre,
    description: entity.description,
    publishYear: formatDate(entity.publishYear),
    authorId: entity.authorId,
    registerDate: entity.createdAt,
  }
}

bookRoutes.get("/", async (req, res) => {
  // buscar do banco
  const books = await prisma.book.findMany();

  return res.json({
    message: "Livros retornados com sucesso",
    data: books.map(mapToDto),
  });
});

bookRoutes.post("/", async (req, res) => {
  const { title, genre, description, publishYear, authorId } = req.body;
  try {
    console.log({ title, genre, description, publishYear, authorId });

    const authorExists = await prisma.author.findUnique({
      where: { id: authorId }
    })

    if (!authorExists) {
      return res.status(404).json({
        field: "authorId",
        message: "Autor não encontrado",
      });
    }


    // cadastrar autor no banco de dados
    const bookDate = new Date(publishYear)
    const newBook = await prisma.book.create({
      data: {
        title,
        genre,
        description,
        publishYear: bookDate,
        authorId
      },
    });


    return res.status(201).json({
      message: "Novo Livro cadastrado com sucesso",
      data: mapToDto(newBook),
    });
  }
  catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "Erro ao cadastrar livro",
      error: err,
    });
  }
});
