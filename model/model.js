const model = {};
const todolist = require("./todolists");
const users = require("./users");

todolist.belongsTo(users, {
  foreignKey: "userId",
  as: "users",
});
users.hasMany(todolist, {
  foreignKey: "userId",
  as: "todolist",
});

model.todolist = todolist;
model.users = users;
module.exports = model;
