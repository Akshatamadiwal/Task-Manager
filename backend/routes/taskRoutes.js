
import express from "express";
import Task from "../models/task.js";
const router = express.Router();


router.post("/tasks", async (req, res) => {
    try {
        console.log("Incoming task body:", req.body);  // 🔥 ADD THIS

        const newTask = new Task(req.body);
        await newTask.save();

        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// GET tasks by user
router.get("/tasks/:userId", async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.params.userId });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/tasks/task/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put("/tasks/:id", async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE task by taskId
router.delete("/tasks/:id", async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json({ message: "Task deleted successfully" });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



export default router;