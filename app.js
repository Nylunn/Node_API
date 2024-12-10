const port = 3000;
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config({ path: './env/.env' });
const mongoose = require('mongoose');
const { initClientDbConnection } = require('./db/mongo');
initClientDbConnection();



const indexRouter = require('./routes/index');
const mongodb = require('../db/mongo');

mongodb.initClientDbConnection()
    .then(() => {
        console.log('Connexion MongoDB réussie.');
    })
    .catch(err => {
        console.error('Erreur de connexion MongoDB :', err);
    });

var app = express();

// view engine setup


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(cors({
    exposedHeader : ['Authorization'],
    origin: '*'
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

app.use(function(req, res, next) {
    res.status(404).json({name: 'API', version: '1.0', status: 404, message: 'not_found'});
});

module.exports = app;
