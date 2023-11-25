const express = require('express');
const app = express();
const cors = require('cors');

// routes
const productRoutes = require('./routes/products.js')
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(productRoutes);


module.exports = app;