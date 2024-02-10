import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name: { type: String },
    phoneNumber: { type: Number },
    password: { type: String },
    confirmPassword: { type: String }
}, {
    timestamps: true
});
export const Users = new mongoose.model('Users', usersSchema);
