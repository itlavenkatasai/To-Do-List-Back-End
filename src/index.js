import express from 'express';
import { connectToMongoDB } from './db/index.js';
// const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
    console.log('hello i am home');
});

connectToMongoDB();
app.listen(3000);