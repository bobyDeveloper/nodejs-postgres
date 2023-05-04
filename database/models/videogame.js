'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Videogame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Videogame.init({
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    precio: DataTypes.TEXT,
    country: DataTypes.STRING,
    calificacion: DataTypes.INTEGER,
    dispositivo: DataTypes.STRING,
    dificultad: DataTypes.STRING,
    categoria: DataTypes.STRING,
    version: DataTypes.TEXT,
    lanzamiento: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Videogame',
  });
  return Videogame;
};