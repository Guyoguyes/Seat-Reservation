const express = require('express');

const route = express.Router();

//post available bus
route.post('/bus', (req, res) =>{
    res.send('posting bus')
});

//get bus
route.get('/bus', (req, res) =>{
    res.send('getting bus')
});

//update bus
route.put('/bus', (req, res) =>{
    res.send('updated bus')
});

//delete bus
route.delete('/bus', (req, res, next) =>{
    res.send('deleting bus')
});

module.exports = route;