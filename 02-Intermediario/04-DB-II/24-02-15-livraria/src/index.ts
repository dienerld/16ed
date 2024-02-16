import express from "express";
import cors from 'cors';
import { authorRoutes } from "./author"
import { bookRoutes } from "./books";

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Server running 🚀"
  })
})

app.use("/authors", authorRoutes)
app.use("/books", bookRoutes)

app.listen(3333, () => {
  console.log("Server running on port 3333.");
});
