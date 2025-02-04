import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("carro", { title: "Carro de Compras" });
});


router.get('/login', (req, res) => {
  res.sendFile(__dirname + "/views/login.ejs");
});
export default router;
