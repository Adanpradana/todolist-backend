const Sequelize = require("sequelize");
const db = require("../database/connection");
const user = db.define("user", {
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
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
});

module.exports = user;
