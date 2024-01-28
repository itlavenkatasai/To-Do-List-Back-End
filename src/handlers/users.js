import { Users } from '../models/index.js';
import Jwt from 'jsonwebtoken';

export const registrationHandler = async (req, res) => {
    try {
        const { name, phoneNumber, password } = req.body;
        const existingUser = await Users.findOne({ phoneNumber });
        if (existingUser != null) {
            return res.status(409).json({
                message: "this phone number is already exist"
            });
        };
        const user = {
            name,
            phoneNumber,
            password
        };
        console.log(user);
        const userCreate = await Users.create(user);
        return res.status(200).json({
            message: "user is registered successfully",
            data: userCreate,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    };
};

export const loginHandler = async (req, res) => {
    try {
        const { phoneNumber, password } = req.body;
        const existingUser = await Users.findOne(phoneNumber);
        if (existingUser == null) {
            return res.status(404).json({
                message: "user not found"
            });
        };
        if (password != existingUser.password) {
            return res.status(400).json({
                message: "invalid password",
            });
        };
        //token creation with payload,securitykey,token expire time arguments.
        const token = await Jwt.sign({ phoneNumber, userId: existingUser._id }, '@12345', { expiresIn: '2h' });
        return res.status(200).json({
            data: {
                token
            }
        });

    } catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    };
};


