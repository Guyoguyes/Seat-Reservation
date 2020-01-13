const mongoose = require('mongoose');

const busSchema = mongoose.Schema({
    $key:{
        type: String
    },
    coach_type:{
        type: String
    },
    fare: {
        type: Number
    },
    location:{
        type: String
    },
    name: {
        type: String
    },
    seat:{
        type: Number
    },
    time: {
        type: String
    }
});

module.exports = mongoose.model('Bus', busSchema);