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
        result.length > 0 ? res.status(200).json({ message: "success get all data", data: result }) : res.status(400).json({ message: "no data found !" });
      });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const post = async (req, res) => {
  try {
    const { todo_id, userId, todo_list, deskripsi, isdone } = req.body;
    const todolist = await model.todolist.create({
      todo_id,
      todo_list,
      deskripsi,
      isdone,
      userId,
    });
    res.status(201).json({
      message: "success add todolist !",
      data: todolist,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const update = async (req, res) => {
  const { todo_list, deskripsi, isdone, userId } = req.body;
  try {
    const update = await model.todolist.update(
      {
        todo_list,
        deskripsi,
        isdone,
        userId,
      },
      {
        where: {
          todo_id: req.params.todo_id,
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
  const { todo_id } = req.params;
  try {
    await model.todolist
      .destroy({
        where: {
          todo_id,
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
