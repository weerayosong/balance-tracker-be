import express from "express";
import cors from "cors";

import taskRoutes from "./routes/taskRoutes.js";

const app = express();

const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from API Server");
});

app.use("/api/v1/tasks", taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
