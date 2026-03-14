const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    name_hi: {
        type: String
    },
    name_mr: {
        type: String
    },
    crop: {
        type: String,
        required: true
    },
    symptoms: {
        type: String,
        required: true
    },
    symptoms_hi: {
        type: String
    },
    symptoms_mr: {
        type: String
    },
    treatment: {
        type: String,
        required: true
    },
    treatment_hi: {
        type: String
    },
    treatment_mr: {
        type: String
    },
    prevention: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Disease', diseaseSchema);