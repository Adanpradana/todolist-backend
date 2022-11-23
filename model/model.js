const model = {};
const todolist = require("./todolists");
const users = require("./users");

users.hasMany(todolist);
todolist.belongsTo(users, {
  foreignKey: "userId",
});

model.todolists = todolist;
model.users = users;
module.exports = model;
