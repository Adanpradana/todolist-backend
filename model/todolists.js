const Sequelize = require("sequelize");
const db = require("../database/connection");
const todolist = db.define("todolist", {
  uuid: {
    type: Sequelize.DataTypes.STRING,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  todolist: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  isdone: {
    type: Sequelize.TINYINT,
    allowNull: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

module.exports = todolist;
