const { where } = require("sequelize");
const model = require("../model/model");

const getUsers = async (req, res) => {
  try {
    await model.users.findAll().then((result) => {
      result.length > 0 ? res.status(200).json({ message: "success get all data", data: result }) : res.status(400).json({ message: "failed load data" });
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getUsersTodo = async (req, res) => {
  try {
    await model.users
      .findAll({
        include: [
          {
            model: model.todolist,
            as: "todolist",
          },
        ],
      })
      .then((result) => {
        result.length > 0 ? res.status(200).json({ message: "success get all data", data: result }) : res.status(400).json({ message: "failed load data" });
      });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const createUser = async (req, res) => {
  const { id, user_name, email } = req.body;
  try {
    await model.users
      .create({
        id,
        user_name,
        email,
      })
      .then((result) => {
        result.length > 0 ? res.status(200).json({ message: "success create users", data: result }) : res.status(400).json({ message: "failed create users!" });
      });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const findUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await model.users.findAll({
      where: {
        id,
      },
    });
    res.status(200).json({ message: "success !", data: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getUsersTodo,
  createUser,
  findUser,
};
