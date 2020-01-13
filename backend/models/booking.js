const mongoose = require('mongoose');
const Bus = require('./Bus');
const SeatBook = require('./seat_book');

const bookingSchema = mongoose.Schema({
    $key:{
        type: String
    },
    location: {
        type: String
    },
    bus:{
        ref: Bus
    },
    seat_book_User: {
        ref: SeatBook
    }
});

module.exports = mongoose.model('booking', bookingSchema);