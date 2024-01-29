import express from 'express';
import { connectToMongoDB } from './db/index.js';
import {
    createTaskHandler,
    updateTaskByIdHandler,
    registrationHandler,
    loginHandler,
    listTasksHandler,
    getTaskByIdHandler,
    deleteTaskByIdHandler,
} from './handlers/index.js';

connectToMongoDB();

const app = express();

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World');
    console.log('hello i am home');
});

app.post('/register', registrationHandler);
app.post('/login', loginHandler);

app.post('/tasks', createTaskHandler);
app.get('/tasks', listTasksHandler);
app.get('/tasks/:id', getTaskByIdHandler);
app.patch('/tasks/:id', updateTaskByIdHandler);
app.delete('/tasks/:id', deleteTaskByIdHandler);

app.listen(3000);