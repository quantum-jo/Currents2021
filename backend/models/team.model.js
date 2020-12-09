const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('team', teamSchema);
