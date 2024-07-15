const mongoose = require("mongoose");
const productSchema = require("./productModel");

const catalogSchema = mongoose.Schema({
    category_name: String,
    category_products: [productSchema]
})

module.exports = mongoose.model('Category', catalogSchema);