import { Tasks } from '../models/index.js';

export const createTaskHandler = async (req, res) => {
    try {
        const { userId, text, dueDate, status, createdAt, updatedAt } = req.body;
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
        console.log(error);
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    };
};

export const listTasksHandler = async (req, res) => {
    try {
        const listTask = await Tasks.find();
        return res.status(200).json({
            message: "task list get successfully",
            data: listTask,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    };
};

export const getTaskByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const getTask = await Tasks.findById(id);
        return res.status(200).json({
            message: "task get by id successfully",
            data: getTask,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "something went wrong try again",
        });
    };
};

export const updateTaskByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, text, dueDate, status, createdAt, updatedAt } = req.body;
        const show = {
            userId, text, dueDate, status, createdAt, updatedAt
        }
        console.log(show);
        const taskUpdate = await Tasks.findByIdAndUpdate(id, { userId, text, dueDate, status, createdAt, updatedAt }, { returnDocument: "after" });
        return res.status(200).json({
            message: "task is updated successfully",
            data: taskUpdate,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    };
};

export const deleteTaskByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTask = await Tasks.findByIdAndDelete(id);
        return res.status(200).json({
            message: "task delete by id successfully",
            data: deleteTask,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    };
};