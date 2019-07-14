const mongoose = require('mongoose');
const Schema = mongoose.Schema();

module.exports = profileSchema.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    favBlend: {
        type: String,
        enum: ['dark', 'light', 'medium'],
        required: true,
    },
    favBrandBox: {
        type: String,
        enum: ['Box1', 'Box2', 'Box3'],
        required: true
    },
    age: {
        type: Number,
        min: 18,
        required: true,
    }
});