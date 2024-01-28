import express from 'express';
import { connectToMongoDB } from './db/index.js';
import {
    createTaskHandler,
    updateTaskHandler,
    registrationHandler,
    loginHandler,

} from './handlers/index.js';
const app = express();
// const express = require('express');

app.get('/', function (req, res) {
    res.send('Hello World');
    console.log('hello i am home');
});

connectToMongoDB();
app.get('/register', registrationHandler);
app.get('/login', loginHandler);

app.post('/tasks', createTaskHandler);
app.patch('tasks/:id', updateTaskHandler);

app.listen(3000);