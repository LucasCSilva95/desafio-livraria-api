import express from "express";
import cors from "cors";
import "dotenv/config";
import ClienteRouter from "./routes/cliente.route.js";
import AutorRouter from "./routes/autor.route.js";
import LivroRouter from "./routes/livro.route.js";
import VendaRouter from "./routes/venda.route.js";
import basicAuth from "express-basic-auth";
import { authorize, authorizer } from "./controllers/auth.controller.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(basicAuth({ authorizeAsync: true, authorizer }));
app.use("/cliente", ClienteRouter);
app.use("/autor", authorize(process.env.ADMIN_USER), AutorRouter);
app.use("/livro", LivroRouter);
app.use("/venda", VendaRouter);
app.use((error, req, res, next) => {
  res.status(400).send({ error: error.message });
});

app.listen(process.env.API_PORT, () => console.log("API Started!"));
