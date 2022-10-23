const Sequelize = require("sequelize");
const db = require("../database/connection");
const todolist = db.define(
  "todolist",
  {
    id: {
      type: Sequelize.INTEGER,
      aoutoIncrement: true,
      primaryKey: true,
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
  },
  {
    freezeTableName: "true",
    timestamps: false,
  }
);
module.exports = todolist;
