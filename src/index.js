import express from 'express';
import { connectToMongoDB } from './db/index.js';
import { createTaskHandler, updateTaskHandler } from './handlers/index.js';
import { createUserHandler, updateUserHandler } from './handlers/index.js';
const app = express();
// const express = require('express');

app.get('/', function (req, res) {
    res.send('Hello World');
    console.log('hello i am home');
});

connectToMongoDB();
app.post('/tasks', createTaskHandler);
app.patch('tasks/:id', updateTaskHandler);

app.post('/user', createUserHandler);
app.patch('/user/:id', updateUserHandler);
app.listen(3000);