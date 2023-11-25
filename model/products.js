const mongoose = require('mongoose');
const productSchema = ({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    regularPrice: {
        type: Number,
        required: true,
    },
    salePrice: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
})
const Products = mongoose.model('products', productSchema);
module.exports = Products;
