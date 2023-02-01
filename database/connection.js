const Sequelize = require("sequelize");
const secretKey = process.env.APP_TOKEN_PASSWORD;
const db = new Sequelize("todolist", "root", secretKey, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
