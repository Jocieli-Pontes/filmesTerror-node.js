import express  from "express";
const router = express.Router();

router.get("/noticias", (req, res) => {
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

export default router;