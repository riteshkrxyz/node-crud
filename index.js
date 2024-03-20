const express = require('express');
const app = express();
const fs = require('fs');
const port = 8000;
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const { connectDB } = require('./connection');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connection
connectDB('mongodb://127.0.0.1:27017/session')

app.use('/api/users', userRouter)

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        console.log(`Server is running on port ${port}`)
    }
})