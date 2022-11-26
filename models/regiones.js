const Sequelize = require('sequelize');

const sequelize = require("../util/database");

const Regiones = sequelize.define("region", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    regiones: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Regiones;