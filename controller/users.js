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

module.exports = getUsers;
