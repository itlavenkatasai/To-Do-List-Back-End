import mongoose from "mongoose";
export const dbConnectedToMongoDB = () => {
    try {
        mongoose.connect("mongodb://localhost:27017/todo-web-app");
        console.log('node is connected to db');
        return true;
    } catch (error) {
        console.log('node is not connected to db');
        console.log(error);
        return false;
    }
}