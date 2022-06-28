import express from "express";
import cors from "cors";
import ClienteRouter from "./routes/cliente.route.js";
import AutorRouter from "./routes/autor.route.js";
import LivroRouter from "./routes/livro.route.js";
import VendaRouter from "./routes/venda.route.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/cliente", ClienteRouter);
app.use("/autor", AutorRouter);
app.use("/livro", LivroRouter);
app.use("/venda", VendaRouter);
app.use((error, req, res, next) => {
  res.status(400).send({ error: error.message });
});

app.listen(3000, () => console.log("API Started!"));
