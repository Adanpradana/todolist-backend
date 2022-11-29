const model = require("../model/model");

const getUsersTodo = async (req, res) => {
  const { user_name, password } = req.params;
  try {
    const result = await model.users.findAll({
      where: {
        user_name,
      },
      include: {
        model: model.todolist,
        as: "todolist",
      },
      // raw: true,
    });
    result.length > 0
      ? res.status(200).json({ message: "success get all data", users: result })
      : res.status(400).json({ message: "failed load data" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createUsersTodo = async (req, res) => {
  try {
    const result = await model.users.create({
      include: [],
    });
  } catch (error) {}
};

getUserLogin = async (req, res) => {
  const { user_name } = req.body;
  try {
    const result = await model.users.findOne({
      where: {
        user_name,
      },
      relations: ["users", "todolist", "todolist.todolist"],
    });
    res.status(200).json({ message: success, result });
  } catch (error) {}
};
module.exports = { getUsersTodo, getUserLogin };
