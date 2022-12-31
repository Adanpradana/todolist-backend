const { where } = require("sequelize");
const model = require("../model/model");
const bcrypt = require("bcrypt");

const bcryptCheck = require("../utils/bcrypt");

const getUsers = async (req, res) => {
  try {
    await model.users.findAll().then((result) => {
      result.length > 0
        ? res
            .status(200)
            .json({ message: "success get all data !", data: result })
        : res.status(400).json({ message: "users is empty !" });
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const { user_name, email, password, role } = req.body;
  const encryptPassword = await bcrypt.hash(password, 12);
  try {
    const result = await model.users.create({
      user_name,
      email,
      role,
      password: encryptPassword,
    });
    res.status(200).json({ message: "username created 🙌", data: result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const editUser = async (req, res) => {
  const { uuid, user_name, email, password, newPassword } = req.body;
  const compare = await bcryptCheck(user_name, password);
  const encryptPassword = await bcrypt.hash(newPassword, 12);
  try {
    if (compare) {
      const user = await model.users.update(
        {
          user_name,
          email,
          password: encryptPassword,
        },
        {
          where: {
            user_name,
          },
        }
      );
      res.json({ message: "data updated !" });
    } else {
      res.status(400).json({ message: "wrong password!" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { user_name, password } = req.body;
  try {
    const compare = await bcryptCheck(user_name, password);
    compare.bcryptCheck
      ? res
          .status(200)
          .json({ message: "login success !", result: compare.userData })
      : res.status(400).json({ message: "password not match!" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  editUser,
  createUser,
  login,
};
