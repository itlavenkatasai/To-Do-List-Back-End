import Jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { Users } from '../models/index.js';

export const registrationHandler = async (req, res) => {
    try {
        const { name, phoneNumber, password } = req.body;
        const existingUser = await Users.findOne({ phoneNumber });
        if (existingUser != null) {
            return res.status(409).json({
                message: "this phone number is already exist"
            });
        };
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const user = {
            name,
            phoneNumber,
            password: hashedPassword,
        };
        console.log(user);
        const userCreate = await Users.create(user);
        const userResponse = { name, phoneNumber, _id: userCreate._id };
        return res.status(200).json({
            message: "user is registered successfully",
            data: userResponse,
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
        const existingUser = await Users.findOne({ phoneNumber });
        if (existingUser == null) {
            return res.status(404).json({
                message: "user not found"
            });
        };
        const isPasswordMatch = bcryptjs.compareSync(password, existingUser.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "invalid password",
            });
        };
        const { TOKEN_SECRET, TOKEN_EXPIRES_IN } = process.env;
        //token creation with payload,securitykey,token expire time arguments.
        const token = await Jwt.sign({ phoneNumber, userId: existingUser._id }, TOKEN_SECRET, { expiresIn: TOKEN_EXPIRES_IN });
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


