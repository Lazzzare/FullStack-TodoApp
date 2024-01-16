import express from "express";
import { PORT, mongoDBUrl } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import { Todo } from "./models/todoModel.js";

const app = express();
app.use(express.json());
app.use(cors());

// HomeRoute
app.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).send(todos);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
});

// SaveTodo in Database
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

// DeleteTodo

app.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Todo.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send({ message: `todo with id ${id} not found` });
    }

    return res.status(200).send({ message: "book deleted successfully" });
  } catch (error) {
    console.log(error.message);
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
