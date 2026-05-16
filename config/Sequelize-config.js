import {Sequelize}  from "sequelize";

const SequelizeConnection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    timezone: "-03:00",
    database: "FilmesTerror"
});
export default SequelizeConnection;