const { where, Op } = require("sequelize");
const model = require("../model/model");

const get = async (req, res) => {
  try {
    await model.todolist
      .findAll({
        // attributes: ["todo_id", "todo_list", "isdone"],
        // limit: 5,
      })
      .then((result) => {
        result.length > 0
          ? res
              .status(200)
              .json({ message: "success get all data", data: result })
          : res.status(400).json({ message: "no data found !" });
      });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const post = async (req, res) => {
  try {
    const { todolist, description, isdone, userId } = req.body;
    const response = await model.todolist.create({
      todolist,
      userId,
    });
    res.status(201).json({
      message: "success add todolist !",
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const update = async (req, res) => {
  const { todolist, userId, id } = req.body;
  try {
    const update = await model.todolist.update(
      {
        todolist,
        userId,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json({ message: "success update todolist" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const find = async (req, res) => {
  const { todo_id } = req.query;
  try {
    const result = await model.todolist.findOne({
      where: {
        todo_id,
      },
    });
    res.status(200).json({ message: "data found", data: result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const search = async (req, res) => {
  const search = req.query.keyword;
  try {
    const result = await model.todolist.findAll({
      where: {
        todo_list: {
          [Op.like]: `%${search}%`,
        },
      },
    });
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const destroy = async (req, res) => {
  const { id } = req.body;
  try {
    await model.todolist
      .destroy({
        where: {
          id,
        },
      })
      .then(res.status(200).json({ message: "success delete todolist !" }));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  post,
  get,
  update,
  find,
  search,
  destroy,
};
