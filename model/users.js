const Sequelize = require("sequelize");
const db = require("../database/connection");
const users = db.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      aoutoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    user_name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  },

  {
    freezeTableName: "true",
    timestamps: false,
  }
);
module.exports = users;
