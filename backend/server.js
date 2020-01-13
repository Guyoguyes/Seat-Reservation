//Dependancies
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/db');

//connecting to database
mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () =>{
    console.log('Database Connected: '+config.db)
});
mongoose.connection.on('error', (err) =>{
    console.log('Database Error: '+err)
})

const app = express();
const port = 3000;

//Routes
app.get('/', (req, res) =>{
    res.send('Welcome to redBus admin portal')
});

//404 Error Page
app.use('/404', (req, res, next) =>{
    res.type('text/plain');
    res.status(404);
    next(createError(404));
    res.send('404 - Not Found')
});

//500 Server Error
app.use('/500', (req, res, next) =>{
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error')
});

//Server
app.listen(port, () => {
    console.log('server listening to localhost: '+port)
});