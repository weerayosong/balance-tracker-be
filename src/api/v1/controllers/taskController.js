import { tasks } from "../../v1/models/mockTasks.js";

// GET
export const getAllTasks = (req, res) => {
    res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks,
    });
};

// POST
export const createTask = (req, res) => {
    const newTask = {
        id: Date.now(),
        ...req.body,
        completed: false,
        status: "active",
    };

    tasks.push(newTask);

    res.status(201).json({
        success: true,
        data: newTask,
    });
};

// PUT
export const updateTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex((t) => t.id === taskId);

    if (taskIndex === -1) {
        return res
            .status(404)
            .json({ success: false, message: "Task not found" });
    }

    tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };

    res.status(200).json({
        success: true,
        data: tasks[taskIndex],
    });
};

// DELETE
export const deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex((t) => t.id === taskId);

    if (taskIndex === -1) {
        return res
            .status(404)
            .json({ success: false, message: "Task not found" });
    }

    tasks.splice(taskIndex, 1);

    res.status(200).json({
        success: true,
        data: {},
    });
};
