const express = require('express');
const productsRouter = express.Router();
//const path= require ('path');
// const fsPromise =require('fs/promises');
// const fs =require('fs');
//const Todo =require("../Models/Todo");
const {getAllProducts, getCategory, getByPrice, addProduct, editProduct, deleteProduct, getProductById, getProductByPrice } = require('../controllers/productController');



productsRouter.get('/' ,getAllProducts);
// productsRouter.get('/:category' ,getCategory )
// productsRouter.get('/:Price' ,getProductByPrice )
productsRouter.get('/:id' ,getProductById);
productsRouter.get('/price' ,getByPrice )
productsRouter.post("",addProduct);
productsRouter.patch("/:id", editProduct)
productsRouter.delete("/:id",deleteProduct )
module.exports=productsRouter;