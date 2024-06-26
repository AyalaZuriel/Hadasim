const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const clientRoutes = require('./routes/clientRoutes');

mongoose.connect('mongodb+srv://admin:ayala@cluster0.4b84i4x.mongodb.net/');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authoriuzation"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/clients', clientRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;