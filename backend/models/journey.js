const mongoose = require('mongoose');
const Bus = require('./Bus');
const seat = require('./seat');
const route = require('./route');

const journeySchema = mongoose.Schema({
    bus: {
        ref: Bus
    },
    seats: {
        ref: seat
    },
    fare: {
        type: Number
    },
    journey_route:{
        ref: route
    },
   
});

// const seatSchema = mongoose.Schema({
//     seat:{
//         type: String
//     }
// })

module.exports = mongoose.model('journey', journeySchema);
// module.exports = mongoose.model('seat', seatSchema);