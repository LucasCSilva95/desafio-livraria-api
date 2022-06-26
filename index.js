import express from "express";
import cors from "cors";
import ClienteRouter from "./routes/cliente.route.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/cliente", ClienteRouter);
app.use((error, req, res, next) => {
  res.status(400).send({ error: error.message });
});

app.listen(3000, () => console.log("API Started!"));
