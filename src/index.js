import express from 'express';
import { connectToMongoDB } from './db/index.js';
import {
    createTaskHandler,
    updateTaskByIdHandler,
    registrationHandler,
    loginHandler,
    listTaskHandler,
    getTaskByIdHandler,
    deleteTaskByIdHandler,

} from './handlers/index.js';
const app = express();
app.use(express.json());
// const express = require('express');

app.get('/', function (req, res) {
    res.send('Hello World');
    console.log('hello i am home');
});

connectToMongoDB();
app.post('/register', registrationHandler);
app.post('/login', loginHandler);

app.post('/tasks', createTaskHandler);
app.get('/tasks', listTaskHandler);
app.get('/tasks/:id', getTaskByIdHandler);
app.patch('tasks/:id', updateTaskByIdHandler);
app.delete('/tasks/:id', deleteTaskByIdHandler);

app.listen(3000);