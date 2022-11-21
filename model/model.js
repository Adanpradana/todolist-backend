const todolist = require("./todolist");
const users = require("./users");
const model = {};

// todolist.belongsTo(users, {
//   foreignKey: "userId",
//   as: "users",
// });
// users.hasMany(todolist, {
//   foreignKey: "userId",
//   as: "todolist",
// });

model.todolist = todolist;
model.users = users;
module.exports = model;
