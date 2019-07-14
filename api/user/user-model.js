const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    }, 
    password: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }, 
    favBlend: {
        type: String,
        enum: ['choose one','brand 1', 'brand 2', 'brand 3'],
        default: 'choose one'
    }
});

module.exports = mongoose.model('User', userSchema);