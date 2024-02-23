import { Router } from "express";
import { prisma } from "./database/prisma";
import { Book } from "@prisma/client";

// faz referência a um método de formatação de data do JS - método configurado para formatar a data no padrão brasileiro (pt-BR) DD/MM/YYYY
const formatDate = (
  date: Date,
  format: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }
) => Intl.DateTimeFormat("pt-BR", format).format(date);

export const bookRoutes = Router();

function mapToDto(entity: Book) {
  return {
    title: entity.title,
    genre: entity.genre,
    description: entity.description,
    publishYear: formatDate(entity.publishYear),
    authorId: entity.authorId,
    registerDate: formatDate(entity.createdAt,{
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
  };
}

bookRoutes.get("/", async (req, res) => {
  // buscar do banco
  const books = await prisma.book.findMany();

  return res.json({
    message: "Livros retornados com sucesso",
    data: books.map(mapToDto),
    // data: books,
  });
});

bookRoutes.post("/", async (req, res) => {
  const { title, genre, description, publishYear, authorId } = req.body;
  try {
    console.log({ title, genre, description, publishYear, authorId });

    const authorExists = await prisma.author.findUnique({
      where: { id: authorId },
    });

    if (!authorExists) {
      return res.status(404).json({
        field: "authorId",
        message: "Autor não encontrado",
      });
    }

    // cadastrar autor no banco de dados
    const bookDate = new Date(publishYear);
    const newBook = await prisma.book.create({
      data: {
        title,
        genre,
        description,
        publishYear: bookDate,
        authorId,
      },
    });

    return res.status(201).json({
      message: "Novo Livro cadastrado com sucesso",
      data: mapToDto(newBook),
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "Erro ao cadastrar livro",
      error: err,
    });
  }
});

bookRoutes.get("/:id", async (req, res) => {
  const { id } = req.params;

  const book = await prisma.book.findUnique({
    where: { id },
  });

  if (!book) {
    return res.status(404).json({
      message: "Livro não encontrado",
    });
  }

  return res.json({
    message: "Livro retornado com sucesso",
    data: mapToDto(book),
  });
});

bookRoutes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, genre, description, publishYear, authorId } = req.body;

  const book = await prisma.book.findUnique({
    where: { id },
  });

  if (!book) {
    return res.status(404).json({
      message: "Livro não encontrado",
    });
  }

  const bookDate = new Date(publishYear);
  const updatedBook = await prisma.book.update({
    where: { id },
    data: {
      title,
      genre,
      description,
      publishYear: bookDate,
      authorId,
    },
  });

  return res.json({
    message: "Livro atualizado com sucesso",
    data: mapToDto(updatedBook),
  });
});

bookRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const book = await prisma.book.findUnique({
    where: { id },
  });

  if (!book) {
    return res.status(404).json({
      message: "Livro não encontrado",
    });
  }

  await prisma.book.delete({
    where: { id },
  });

  return res.json({
    message: "Livro deletado com sucesso",
  });
});
