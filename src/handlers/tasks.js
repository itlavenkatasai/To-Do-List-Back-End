import { Tasks } from '../models/index.js';

export const createTaskHandler = async (req, res) => {
    try {
        const {
            userId,
            text,
            dueDate,
            status,
            createdAt,
            updatedAt
        } = req.body;
        const task = {
            userId,
            text,
            dueDate,
            status,
            createdAt,
            updatedAt
        };
        const taskCreate = await Tasks.create(task);
        return res.status(200).json({
            message: "task is created successfully",
            data: taskCreate,
        });
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    };
};

export const updateTaskHandler = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            userId,
            text,
            dueDate,
            status,
            createdAt,
            updatedAt
        } = req.body;
        const taskUpdate = await Tasks.findByIdAndUpdate(id, { userId, text, dueDate, status, createdAt, updatedAt }, { returnDocument: "after" });
        return res.status(200).json({
            message: "task is updated successfully",
            data: taskUpdate,
        });
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    };
};