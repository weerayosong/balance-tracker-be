import express from "express";
// import taskRoutes from './routes/taskRoutes.js';

const router = express.Router();

router.get("/status", (req, res) => {
    res.json({
        message: "Welcome to V2 API (MongoDB Integration in progress)",
    });
});

// router.use('/tasks', taskRoutes);

export default router;
