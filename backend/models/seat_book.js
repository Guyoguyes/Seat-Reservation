const mongoose = require('mongoose');
const Seat = require('./seat');

const seat_bookSchema = mongoose.Schema({
    $key:{
        type:String
    },
    user_id:{
        type: String
    },
    seats:{
        ref: Seat
    }
});

module.exports = mongoose.model('seat_book', seat_bookSchema);