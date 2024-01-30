import mongoose from "mongoose";

export const connectToMongoDB = () => {
    try {
        const { MONGODB_URL } = process.env;
        mongoose.connect(MONGODB_URL);
        console.log('node is connected to db');
        return true;
    } catch (error) {
        console.log('node is not connected to db');
        console.log(error);
        return false;
    }
}