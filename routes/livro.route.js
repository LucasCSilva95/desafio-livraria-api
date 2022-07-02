import express from "express";
import LivroController from "../controllers/livro.controller.js";
import InfoController from "../controllers/info.controller.js";
import AvaliacaoController from "../controllers/avaliacao.controller.js";

const router = express.Router();

router.post("/", LivroController.createLivro);
router.get("/", LivroController.getLivros);
router.get("/:id", LivroController.getLivroById);
router.put("/", LivroController.updateLivro);
router.delete("/:id", LivroController.deleteLivro);
router.post("/info", InfoController.createInfo);
router.put("/info", InfoController.updateInfo);
router.delete("/info/:id", InfoController.deleteInfo);
router.post("/:id/avaliacao", AvaliacaoController.createAvaliacao);
router.delete("/:id/avaliacao/:index", AvaliacaoController.deleteAvaliacao);

export default router;
