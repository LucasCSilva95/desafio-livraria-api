import express from "express";
import cors from "cors";
import ExampleRouter from "./routes/example.route.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/example", ExampleRouter);
app.use((error, req, res, next) => {
  res.status(400).send({ error: error.message });
});

app.listen(3000, () => console.log("API Started!"));
