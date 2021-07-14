const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        require: true,
        trim: true,
    },
    ProductCode: {
        type: String,
        require: true,
        default: 0,
    },
    Brand: {
        type: String,
        require: true,
        trim: true,
    },
    Price: {
        type: Number,
        require: true,
        default: 0,
    },
    ImgLink: {
        type: String,
        require: true,
    },
});
const Products = mongoose.model("Products", ProductSchema, "Products");
module.exports = Products;