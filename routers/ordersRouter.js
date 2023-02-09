const express = require('express');
const {getAllOrders,getOrderById, editOrder, deleteOrder,addOrder } = require('../controllers/orderController');
const ordersRouter = express.Router();
//const path= require ('path');
// const fsPromise =require('fs/promises');
// const fs =require('fs');
//const Todo =require("../Models/Todo");



ordersRouter.post('/', addOrder);
ordersRouter.get('/', getAllOrders);
ordersRouter.get('/:id', getOrderById);
ordersRouter.patch("/:id", editOrder)
ordersRouter.delete("/:id", deleteOrder)
module.exports = ordersRouter;