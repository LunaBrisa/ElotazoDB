import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("carro", { title: "Carro de Compras" });
});

export default router;
