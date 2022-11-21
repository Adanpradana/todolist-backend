const { where } = require("sequelize");
const model = require("../model/model");
const bcrypt = require("bcrypt");
const user = require("../database/connection");
const bcryptCheck = require("../utils/bcrypt");

const getUsers = async (req, res) => {
  try {
    await model.users.findAll().then((result) => {
      result.length > 0
        ? res
            .status(200)
            .json({ message: "success get all data !", data: result })
        : res.status(400).json({ message: "failed load data" });
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const { user_name, email, password } = req.body;
  const encryptPassword = await bcrypt.hash(password, 12);
  try {
    await model.users
      .create({
        user_name,
        email,
        password: encryptPassword,
      })
      .then((result) => {
        if (result.length > 0) {
          res
            .status(200)
            .json({ message: "username created 🙌", data: result });
        }
      });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const editUser = async (req, res) => {
  const { user_name, email, password, newPassword } = req.body;
  const compare = await bcryptCheck(id, password);
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
            id,
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

// const login = async (req, res) => {
//   const { user_name, password } = req.body;
//   try {
//     const compare = await bcryptCheck(user)
//   } catch (error) {}
// };

// const findUser = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await model.users.findAll({
//       where: {
//         id,
//       },
//     });
//     res.status(200).json({ message: "success !", data: result });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

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
        result.length > 0
          ? res
              .status(200)
              .json({ message: "success get all data", data: result })
          : res.status(400).json({ message: "failed load data" });
      });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
user.sync();
module.exports = {
  getUsers,
  editUser,
  createUser,
};
