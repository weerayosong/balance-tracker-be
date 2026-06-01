import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please provide a task title"],
            maxlength: [64, "Title cannot be more than 64 characters"],
        },
        desc: {
            type: String,
            maxlength: [256, "Description cannot be more than 256 characters"],
        },
        category: {
            type: String,
            enum: ["Development", "Health & Routine"],
            default: "Development",
        },
        sprint: String,
        date: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        duration: Number,
        energy: {
            type: Number,
            min: 1,
            max: 5,
            default: 3,
        },
        url: String,
        color: {
            type: String,
            default: "#334155",
        },
        priority: {
            type: String,
            enum: ["normal", "high", "low"],
            default: "normal",
        },
        completed: {
            type: Boolean,
            default: false,
        },
        status: {
            type: String,
            enum: ["active", "archived"],
            default: "active",
        },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model("Task", taskSchema);
