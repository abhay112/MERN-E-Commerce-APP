import express from "express";
// Importting Routes
import userRoutes from './routes/user.js';
import { connectDB } from "./utils/features.js";
const port = 3000;
connectDB();
const app = express();
app.use(express.json());
//Using Routes
app.use("/api/v1/user", userRoutes);
app.get("/", (req, res) => {
    res.send("Api Working with /api/v1");
});
app.listen(port, () => {
    console.log(`started ${port}`);
});
