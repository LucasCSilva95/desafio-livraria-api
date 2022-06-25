import express from "express";
import ExampleController from "../controllers/example.controller.js";

const router = express.Router();

router.post("/", ExampleController.createExample);

export default router;
