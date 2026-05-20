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

router.get("/Favoritos/Excluir/:id", function(req, res){
    const id = req.params.id
    Favoritos.destroy({
        where: {
            id: id
        }
    }).then(()=>{
        res.redirect("/favoritos")
    }).catch((erro)=>{
        console.log(erro)
    })
})

router.get("/Favoritos/Alterar/:id", function(req, res) {
    const id = req.params.id;
    Promise.all([
        Favoritos.findByPk(id),
        Genero.findAll(),
    ]).then(([favoritos, genero]) => {

        res.render("alterar-favoritos", {
            favoritos: favoritos,
            genero: genero
        });
    })
    .catch((erro) => {
        console.log(erro);
        res.send("Erro ao carregar os dados");
    });
});

router.post("/Favoritos/editar", function(req, res){
    const id = req.body.id
    const titulo = req.body.titulo;
    const duracao = req.body.Duracao;
    const genero = req.body.generoid;
    Favoritos.update({
        titulo: titulo,
        duracao: duracao,
        generoid: genero
    },
    {
        where:
        {
            id
        }
    }).then(()=>{
    res.redirect("/Favoritos")
    }).catch((erro)=>{
    console.log(erro)
    })
})

export default router;
