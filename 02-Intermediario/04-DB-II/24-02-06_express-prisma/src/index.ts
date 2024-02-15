import express from "express";
import cors from "cors";

import { prisma } from "./prisma";


const app = express()
app.use(express.json())
app.use(cors())

app.get("/", async (req, res) => {
  const users = await prisma.user.findMany()
  return res.json({ users })
})

app.post("/", async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({
    data: {
      name,
      email
    }
  })
  return res.status(201).json({ user })
})

app.post('/:userId/posts', async (req, res) => {
  const { title, content } = req.body
  const { userId } = req.params

  const newPost = await prisma.post.create({
    data: {
      userId: Number(userId),
      title,
      content
    },
    select: {
      id: true,
      title: true,
      content: true,
    }
  })

  const user = await prisma.user.findFirst({
    where: {
      id: Number(userId),
    }
  })

  return res.status(201).json({
    post: {
      ...newPost,
      author: user?.name
    }
  })
})

app.listen(3333, () => {
  console.log("Server running on port 3333.");
})
