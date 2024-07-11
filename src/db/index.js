import mongoose from "mongoose";

export const connectToMongoDB = () => {
    try {
        const { DATABASE } = process.env;
        mongoose.connect(DATABASE);
        console.log('node is connected to db');
        return true;
    } catch (error) {
        console.log('node is not connected to db');
        console.log(error);
        return false;
    }
}