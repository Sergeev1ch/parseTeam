const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Worker = sequelize.define('worker', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false},
  position: { type: DataTypes.TEXT, allowNull: false},
}, {
  timestamps: false,
});

module.exports = {
    Worker,
};
