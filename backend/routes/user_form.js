const express = require('express');

const route = express.Router();

//post user
route.post('/user', (req, res) =>{
    res.send('post user to admin')
});

//get user
route.get('/user', (req, res) =>{
    res.send('get user on admin')
});

//update user
route.put('/user', (req, res) =>{
    res.send('update user on admin')
});

//delete user
router.delete('/user', (req, res) =>{
    res.send('delete user by admin')
});

module.exports = router;