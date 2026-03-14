const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
        index: true
    },
    temperature: {
        type: Number,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    },
    wind_speed: {
        type: Number,
        required: true
    },
    feels_like: {
        type: Number,
        required: true
    },
    pressure: {
        type: Number,
        required: true
    },
    sunrise: {
        type: String,
        required: true
    },
    sunset: {
        type: String,
        required: true
    },
    icon: {
        type: String
    },
    description: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Weather', weatherSchema);