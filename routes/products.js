const express=require('express');
const router=express.Router();
const {productlist,createProduct} = require('../controller/products.js');

router.get('/products',productlist);
router.post('/createProduct',createProduct);

module.exports=router;
