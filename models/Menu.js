const { default: mongoose } = require('mongoose');
const Mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        require: true
    },
    taste: {
        type: String,
        enum: ['spicy','sweet','sour'],
        require: true
    }
})

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;