import express  from "express";
const router = express.Router();

router.get("/favoritos", (req, res) => {
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

export default router;
