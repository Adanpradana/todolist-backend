const Sequelize = require("sequelize");
const db = require("../database/connection");
const todolist = db.define(
  "todolist",
  {
    todo_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    todo_list: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    deskripsi: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    isdone: {
      type: Sequelize.TINYINT,
      allowNull: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: "true",
    timestamps: false,
  }
);

module.exports = todolist;
