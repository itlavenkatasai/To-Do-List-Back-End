import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: { type: String },
    phoneNumber: { type: Number },
    password: { type: String },
});
export const Tasks = new mongoose.model('Tasks', taskSchema);
