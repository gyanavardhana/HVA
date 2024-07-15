const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: String,
    title: String,
    price: Number,
    compare_at_price: Number,
    vendor: String,
    badge_text: String,
    image: String,
    second_image: String,
});



module.exports = productSchema;
