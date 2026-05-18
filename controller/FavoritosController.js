import express  from "express";
import Favoritos from "../models/favoritosModels.js";
import Genero from "../models/generoModels.js";
import { Model } from "sequelize";
const router = express.Router();

router.get("/favoritos", (req, res) => {
    
   Promise.all([
    Favoritos.findAll({
        include: [
            {
                model:Genero,
                required: true
            },
        ],
   }),
    Genero.findAll(),
   ]).then(([
    favoritos,genero
   ])=>{
    res.render("favoritos", {
        favoritos: favoritos,
        genero: genero
    })
   }).catch((erro) =>{
    console.log(erro)
   })
});

router.post("/Favoritos/Cadastrar", function(req,res){
    const titulo = req.body.titulo;
    const duracao = req.body.Duracao;
    const genero = req.body.generoid
    Favoritos.create({
        titulo: titulo,
        duracao: duracao,
        Generoid: genero
    }).then(()=>{
        res.redirect("/favoritos")
    }).catch((erro)=>{
        console.log(erro)
    })
    
})

export default router;
