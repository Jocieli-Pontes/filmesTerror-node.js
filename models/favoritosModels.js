import SequelizeConnection from "../config/Sequelize-config.js";
import { Sequelize } from "sequelize";
const Favoritos = SequelizeConnection.define("favoritos",{
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    duracao:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Generoid:{
        type: Sequelize.INTEGER, 
        allowNull: false
    }
})
Favoritos.sync({force: false})
export default Favoritos;