import express from "express";
import Genero from "../models/generoModels.js";

const router = express.Router()

router.get("/Generos", function(req, res){
    Genero.findAll().then((consulta)=>{
         res.render("Generos", {
            consulta: consulta
         })

    }).catch((erro)=>{
        console.log(erro)
    })
   
})

router.post("/Generos/Cadastrar", function(req,res){
    const titulo = req.body.nome
    Genero.create({
        titulo: titulo
    }).then(()=>{
        res.redirect("/Generos")
    }).catch((erro)=>{
        console.log(erro)
    })
    
})

router.get("/Genero/Excluir/:id", function(req, res){
    const id = req.params.id
    Genero.destroy({
        where: {
            id: id
        }
    }).then(()=>{
        res.redirect("/Generos")
    }).catch((erro)=>{
        console.log(erro)
    })
})

router.get("/Genero/Alterar/:id", function(req, res){
    const id = req.params.id
    Genero.findByPk(id).then((consulta)=>{
        res.render("alterar-genero",{
            alterar: consulta
        })
    }).catch((erro)=>{
        console.log(erro)
    })
})

router.post("/Generos/Alterar", function(req, res){
    const id = req.body.id
    const titulo = req.body.nome
    Genero.update({
        titulo: titulo
    },
    {
        where:{
            id
        }
    }
).then(()=>{
    res.redirect("/Generos")
}).catch((erro)=>{
    console.log(erro)

})

})

export default router;