import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
import auth from "./routes/auth.js"

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/", taskRoutes);
app.use("/auth", auth);

// DB connection
mongoose.connect("mongodb://127.0.0.1:27017/todoDB")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
