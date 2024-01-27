import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    userId: { type: String },
    text: { type: String },
    dueDate: { type: String },
    status: { type: Boolean },
});
export const Tasks = new mongoose.model('Tasks', taskSchema);
