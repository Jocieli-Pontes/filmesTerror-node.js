import SequelizeConnection from "../config/Sequelize-config.js";
import { Sequelize } from "sequelize";
const Genero = SequelizeConnection.define("titulo",{
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
Genero.sync({force: false})
export default Genero;