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

const Team = mongoose.model("team",teamSchema);

module.exports = Team;
