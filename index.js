import express from 'express';
import { dbConnectedToMongoDB } from './src/db/index.js';
// const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
    console.log('hello i am home');
});

dbConnectedToMongoDB();
app.listen(3000);