import express  from "express";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

import FavoritosController from "./controller/FavoritosController.js";
import NoticiasController from "./controller/NoticiasController.js";
import PerfilController from "./controller/PerfilController.js";
import HomeController from "./controller/HomeController.js";

app.use("/", HomeController);
app.use("/", FavoritosController);
app.use("/", NoticiasController);
app.use("/", PerfilController);

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
