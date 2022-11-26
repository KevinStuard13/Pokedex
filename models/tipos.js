const Sequelize = require('sequelize');

const sequelize = require("../util/database");

const Tipos = sequelize.define("tipos", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    tipos: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Tipos;