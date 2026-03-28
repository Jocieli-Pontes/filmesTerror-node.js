const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});


app.get("/favoritos", (req, res) => {
    const favorito =[
        {
        titulo:"O Elevador 13",duracao: "1h 35min",genero:"Terror tecnológico"
        },
        { titulo:"A Casa Respira",duracao: "1h 50min",genero:"Terror sobrenatural"

        },
        
        { 
            titulo:"Chamadas Perdidas",duracao: "1h 38min",genero:"Terror / Mistério"

        },
        {
            titulo:"O Quarto que Não Existe",duracao: "1h 45min",genero:"Terror psicológico"

        },

        {titulo:"Última Visualização",duracao: "1h 35min",genero:"Terror psicológico / Suspense"

        }
]
    res.render("Favoritos",{
        favorito: favorito
    });
});

app.get("/perfil", (req, res) => {
    const usuario = ["Marcello","Filmes assistidos"]
    res.render("Perfil",{
        usuario: usuario
    });
});

app.get("/noticias", (req, res) => {
    const noticia = [
        {
           titulo: "Novo filme da franquia Halloween anunciado", corpo:"Um novo capítulo da famosa franquia de terror está em produção e promete trazer Michael Myers de volta." 
        },
        {
            titulo: "Atividade Paranormal pode ganhar reboot", corpo:"Produtores estudam reiniciar a série com uma nova história e tecnologia de gravação mais moderna."

        },
        {
            titulo:"A Freira 3 pode estar em desenvolvimento", corpo: "Segundo rumores, o universo Invocação do Mal pode ganhar mais um filme focado na entidade demoníaca Valak."
        }
    ]
   
    res.render("Noticias",{
        noticia: noticia
    });
    
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
