const mongoose = require('mongoose');

const spaces_schema = mongoose.Schema({
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
    },
    imageUrl:[]
}, {timestamps : true });

const model_space = mongoose.model('Spaces', spaces_schema);

module.exports = model_space