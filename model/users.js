const Sequelize = require("sequelize");
const db = require("../database/connection");
const user = db.define("user", {
  uuid: {
    type: Sequelize.DataTypes.STRING,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
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
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
});

module.exports = user;
