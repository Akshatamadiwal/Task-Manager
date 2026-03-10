import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    description: String,
    category: String,
    date: String,
    time: String,
    important: Boolean,
    completed: { type: Boolean, default: false },
    user:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },


});

export default mongoose.model("Task", taskSchema);

