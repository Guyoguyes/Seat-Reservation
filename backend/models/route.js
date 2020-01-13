const mongoose = require('mongoose');

const routeSchema = mongoose.Schema({
    leaving_from:{
        type: String
    },
    going_to:{
        type: String
    },
    date:{
        type: String
    }
});

module.exports = mongoose.model('route', routeSchema);