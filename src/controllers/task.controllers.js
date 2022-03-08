const db = require("../db");

const getAllTasks = async (req, res) => {
  try {
    const response = await db.query("SELECT * FROM task");
    res.status(200).send({
      response: response.rows,
    });
  } catch (error) {
    res.status(400).send({
      error: error,
    });
  }
};

const getTaskById = async (req, res) => {
  try {
    const response = await db.query("SELECT * FROM task WHERE id=$1", [
      req.params.id,
    ]);
    res.status(200).send({
      response: response.rows,
    });
  } catch (error) {
    res.status(400).send({
      error: error,
    });
  }
};

const insertTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const response = await db.query(
      "INSERT INTO task (title, description) VALUES($1, $2) RETURNING *",
      [title, description]
    );
    res.status(200).send({
      message: "Task has been added.",
      response: response,
    });
  } catch (error) {
    res.status(400).send({
      error: error,
    });
  }
};

const updateTaskById = async (req, res) => {
  const { title, description } = req.body;

  try {
    const response = await db.query(
      "UPDATE task SET title=$1, description=$2 WHERE id=$3 RETURNING *",
      [title, description, req.params.id]
    );
    res.status(200).send({
      message: "Task has been updated.",
      response: response,
    });
  } catch (error) {
    res.status(400).send({
      error: error,
    });
  }
};

const deleteTaskById = async (req, res) => {
  try {
    const response = await db.query("DELETE FROM task WHERE id=$1", [
      req.params.id,
    ]);
    res.status(200).send({
      message: `Task ${req.params.id} has been deleted`,
    });
  } catch (error) {
    res.status(400).send({
      error: error,
    });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  insertTask,
  updateTaskById,
  deleteTaskById,
};
