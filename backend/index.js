import express from "express";
import { PORT, mongoDBUrl } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello " });
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
