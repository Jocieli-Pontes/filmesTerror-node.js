import express  from "express";
const router = express.Router();

router.get("/perfil", (req, res) => {
    const usuario = ["Marcello","Filmes assistidos","imgs/retrato.png"]
    res.render("Perfil",{
        usuario: usuario
    });
});

export default router;