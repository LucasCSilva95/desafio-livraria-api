import express from "express";
import VendaController from "../controllers/venda.controller.js";

const router = express.Router();

router.post("/", VendaController.createVenda);
router.get("/", VendaController.getVendas);
router.get("/:id", VendaController.getVendaById);
router.put("/", VendaController.updateVenda);
router.delete("/:id", VendaController.deleteVenda);

export default router;
