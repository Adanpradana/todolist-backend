const Sequelize = require("sequelize");
const db = require("../database/connection");
const user = db.define("admin", {
  id: {
    type: Sequelize.INTEGER,
    aoutoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = user;
