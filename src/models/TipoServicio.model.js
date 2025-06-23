const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TipoServicio = sequelize.define("TipoServicio", {
  id_tipo_servicio: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "tipo_servicio",
  timestamps: false,
});

module.exports = TipoServicio;
