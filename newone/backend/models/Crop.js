const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    name_hi: {
        type: String
    },
    name_mr: {
        type: String
    },
    soil_type: {
        type: String,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    water_requirements: {
        type: String,
        required: true
    },
    fertilizer: {
        type: String,
        required: true
    },
    yield_per_acre: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    description_hi: {
        type: String
    },
    description_mr: {
        type: String
    }
});

module.exports = mongoose.model('Crop', cropSchema);