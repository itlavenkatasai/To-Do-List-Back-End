import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    userId: { type: String },
    text: { type: String },
    dueDate: { type: Date },
    status: { type: Boolean },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});
export const Tasks = new mongoose.model('Tasks', taskSchema);
