import express from "express";
import taskRoutes from "./routes/taskRoutes.js";

const router = express.Router();

router.get("/status", (req, res) => {
    res.json({
        message: "V2 API (MongoDB done!)",
    });
});

router.use("/tasks", taskRoutes);

export default router;
