const Sequelize = require('sequelize');

const sequelize = require("../util/database");

const Pokemones = sequelize.define("pokemons", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    imagenes: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    regiones: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tipos: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Pokemones;