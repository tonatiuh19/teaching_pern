const { Router } = require("express");
const {
  getAllTasks,
  insertTask,
  updateTaskById,
  deleteTaskById,
  getTaskById,
} = require("../controllers/task.controllers");

const router = Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTaskById);
router.post("/tasks", insertTask);
router.put("/tasks/:id", updateTaskById);
router.delete("/tasks/:id", deleteTaskById);

module.exports = router;
