import Genero from "../models/generoModels.js";
import Favoritos from "../models/favoritosModels.js";

const association = () => {
    // 1 Gênero tem muitos Favoritos
    Genero.hasMany(Favoritos, {
        foreignKey: "Generoid"
    });

    // Um Favorito pertence a 1 Gênero
    Favoritos.belongsTo(Genero, {
        foreignKey: "Generoid"
    });
}

export default association;