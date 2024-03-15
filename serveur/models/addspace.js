// models/addspace.js
const mongoose = require('mongoose');

const spaceSchema = mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dimension: {
        type: Number,
        required: true
    },
    place_assise: {
        type: Number,
        required: true
    },
    place_debout: {
        type: Number,
        required: true
    },
    ville: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: true
    }
});

const Space = mongoose.model('Space', spaceSchema);

module.exports = Space;
