import express from "express";
import { PORT, mongoDBUrl } from "./config.js";
import mongoose from "mongoose";
import { Todo } from "./models/todoModel.js";

const app = express();
app.use(express.json());
// HomeRoute
app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello " });
});

// SaveBook in Database
app.post("/", async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).send({ message: "Write required field" });
    }
    const newTodo = {
      title: req.body.title,
    };

    const todo = await Todo.create(newTodo);

    return res.status(200).send(todo);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

mongoose
  .connect(mongoDBUrl)
  .then(() => {
    console.log(`app connected mongoose`);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, (req, res) => {
  console.log(`App listening on ${PORT}`);
});
