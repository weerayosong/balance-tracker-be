import express from "express";
import {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
} from "../../v1/controllers/taskController.js";

const router = express.Router();

// /api/v1/tasks
router.route("/").get(getAllTasks).post(createTask);
// /api/v1/tasks/:id
router.route("/:id").put(updateTask).delete(deleteTask);

export default router;
