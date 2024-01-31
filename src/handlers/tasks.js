import { Tasks } from '../models/index.js';

export const createTaskHandler = async (req, res) => {
    try {
        const { userId } = req.locals;
        const { text, dueDate, status } = req.body;
        const task = {
            userId,
            text,
            dueDate,
            status,
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
        const { userId } = req.locals;
        const listTask = await Tasks.find({ userId });
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
        if (id == null) {
            return res.status(400).json({
                message: "id is not found"
            });
        };
        const getTask = await Tasks.findById(id);
        if (getTask == null) {
            return res.status(404).json({
                message: "task is not found"
            });
        };
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
        const { userId } = req.locals;
        const { text, dueDate, status, } = req.body;
        const taskUpdate = await Tasks.findByIdAndUpdate(id, { userId, text, dueDate, status, }, { returnDocument: "after" });
        if (taskUpdate == null) {
            return res.status(404).json({
                message: "task is not found"
            });
        };
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
        if (id == null) {
            return res.status(400).json({
                message: "id is not found"
            });
        };
        const deleteTask = await Tasks.findByIdAndDelete(id);
        if (deleteTask == null) {
            return res.status(404).json({
                message: "task is not found"
            });
        };
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