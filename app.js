import express  from "express";
import SequelizeConnection from "./config/Sequelize-config.js";

const app = express();

app.use(express.urlencoded({extended: false}))

app.set("view engine", "ejs");
app.use(express.static("public"));

SequelizeConnection.authenticate().then(() => {
    console.log("Conexao realizada com sucesso!")
}).catch((erro)=>{
    console.log(erro)
})

SequelizeConnection.query("create database if not exists FilmesTerror").then(()=>{
    console.log("O banco foi criado com sucesso!")

}).catch((erro)=>{
    console.log(erro)
})

import FavoritosController from "./controller/FavoritosController.js";
import NoticiasController from "./controller/NoticiasController.js";
import PerfilController from "./controller/PerfilController.js";
import HomeController from "./controller/HomeController.js";
import GeneroController from "./controller/GenerosController.js";


app.use("/", HomeController);
app.use("/", FavoritosController);
app.use("/", NoticiasController);
app.use("/", PerfilController);
app.use("/", GeneroController);

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
