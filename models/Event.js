const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    performers: {
        type: String,
    },
    djs: {
        type: String,
    },
    hosts: {
        type: String,
    },
    date: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    flyer: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Event", eventSchema);