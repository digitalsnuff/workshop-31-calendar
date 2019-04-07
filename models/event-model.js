const mongoose = require('mongoose');

const scheme = new mongoose.Schema({
    id: String,
    title: String,
    description: String,
    time: String,
    notification: boolean,
});

module.exports = mongoose.model('Event', scheme);

