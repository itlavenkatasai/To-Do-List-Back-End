import { Users } from '../models/index.js';

export const createUserHandler = async (req, res) => {
    try {
        const {
            name,
            phoneNumber,
            password
        } = req.body;
        const user = {
            name,
            phoneNumber,
            password
        };
        const userCreate = await Users.create(user);
        return res.status(200).json({
            message: "user is created successfully",
            data: userCreate,
        });
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    };
};

export const updateUserHandler = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            name,
            phoneNumber,
            password
        } = req.body;
        const userUpdate = await Users.findByIdAndUpdate(id, { name, phoneNumber, password }, { returnDocument: "after" });
        return res.status(200).json({
            message: "user is updated successfully",
            data: userUpdate,
        });
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    };
};