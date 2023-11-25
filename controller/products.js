const Products = require('../model/products.js');
const createProduct = async (req, res) => {
   try {
      const {title, brand, category, thumbnail, quantity, description, regularPrice, salePrice, rating} = req.body;
      const body={title, brand, category, thumbnail, quantity, description, regularPrice, salePrice, rating};
      const newProduct = await Products.create(body);
      res.status(201).json(newProduct);
   } catch (e) {
      res.status(401).json({
         status: false,
         message: "Couldn't Create"
      })
   }
}
const productlist = async (req, res) => {
   try {
      const products = await Products.find({});
      res.json({
         status: true,
         products 
      })
   } catch (e) { 
      res.status(404).json({
         status: false,
         message: "Something Went Worng"
      })
   }
}
module.exports = { productlist, createProduct }