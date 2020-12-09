const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    serialNo: {
        type: String,
        required: true
    }, 
    name: {
        type: String,
        required: true
    },
    college: {
        type: String
    },
    certificateType: {
        type: Number
    },
    position: {
        type: Number
    }
});

module.exports = mongoose.model('certificate', certificateSchema);