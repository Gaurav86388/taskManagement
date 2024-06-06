import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    id: { type: Number, unique: true, require: true },
    title: { type: String, require: true },
    description: { type: String, require: true },
    status: { type: String, require: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

const tasks = mongoose.model("task", taskSchema);

export default tasks;
