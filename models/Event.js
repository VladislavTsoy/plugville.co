const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    performers: {
        type: [String]
    },
    djs: {
        type: [String],
    },
    date: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required
    },
    flyer: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Event", eventSchema);