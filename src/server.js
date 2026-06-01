import express from "express";
import cors from "cors";

import v1Routes from "./api/v1/index.js";
import v2Routes from "./api/v2/index.js";

const app = express();

const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from API Server");
});

app.use("/api/v1", v1Routes);
app.use("/api/v2", v2Routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
