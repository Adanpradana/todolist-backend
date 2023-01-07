const Sequelize = require("sequelize");
const db = new Sequelize("todolist", "root", "Adan1307@todolist", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
