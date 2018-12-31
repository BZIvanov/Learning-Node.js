const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    category: { type: String, required: [true, "Error message: category is required"] },
    size: { type: Number, required: true, min: 17, max: 24 },
    imageUrl: { type: String, required: true },
    toppings: { type: [ String ], default: [] } 
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
