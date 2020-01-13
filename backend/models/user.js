const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    $key:{
        type: String
    },
    user_email:{
        type: String
    },
    mobile:{
        type: String
    },
    user_name:{
        type: String
    }
});

module.exports = mongoose.model('user', userSchema);