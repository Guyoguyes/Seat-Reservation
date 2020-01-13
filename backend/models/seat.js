const mongoose = require('mongoose');

const seatSchema = mongoose.Schema({
    seatNo:{
        type: String
    },
    seatClass: {
        type: String
    },
    fare:{
        type: Number
    }
});

module.exports = mongoose.model('seat', seatSchema);