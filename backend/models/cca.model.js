const mongoose = require('mongoose');

const CcaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    dob: {
        type: String,
        required: true
    }, 
    college: {
        type: String,
        required: true
    }, 
    branch: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    por: {
        type: String,
        required: true
    }, 
    mobile: {
        type: String,
        required: true
    }, 
    perma_phone: {
        type: String,
        required: true
    }, 
    curr_addr: {
        type: String,
        required: true
    }, 
    perm_addr: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('cca', CcaSchema);