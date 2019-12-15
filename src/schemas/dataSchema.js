const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    key: String,
    createdAt: Date,
    counts: [Number,],
});

module.exports = mongoose.model('record', dataSchema);
