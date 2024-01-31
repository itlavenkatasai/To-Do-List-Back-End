import express from 'express';
import dotenv from 'dotenv';
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
import { checkAndVerify, logDetailsAndProceed } from './middlewares/index.js';


dotenv.config();
const { PORT } = process.env;

connectToMongoDB();

const app = express();

app.use(express.json());

app.use(logDetailsAndProceed);

app.get('/', function (req, res) {
    res.send('Hello World');
    console.log('hello i am home');
});

app.post('/register', registrationHandler);
app.post('/login', loginHandler);

app.use('/tasks', checkAndVerify);

app.post('/tasks', createTaskHandler);
app.get('/tasks', listTasksHandler);
app.get('/tasks/:id', getTaskByIdHandler);
app.put('/tasks/:id', updateTaskByIdHandler);
app.delete('/tasks/:id', deleteTaskByIdHandler);

app.listen(PORT);