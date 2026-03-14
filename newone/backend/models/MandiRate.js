const mongoose = require('mongoose');

const mandiRateSchema = new mongoose.Schema({
    commodity: {
        type: String,
        required: true
    },
    market: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    min_price: {
        type: Number,
        required: true
    },
    max_price: {
        type: Number,
        required: true
    },
    modal_price: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        default: "Maharashtra"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('MandiRate', mandiRateSchema);