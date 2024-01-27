import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    userId: { type: String },
    text: { type: String },
    dueDate: { type: String },
    status: { type: Boolean },
});
export const Users = new mongoose.model('Users', usersSchema);
