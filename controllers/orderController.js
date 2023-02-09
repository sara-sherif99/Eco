const orderModel =require("../models/orderModel");

function Access (res){
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
}

const getAllOrders = async (req, res) => {
    const orders = await orderModel.find({})
    Access(res);
    res.status(200).send(orders);
    }


const getOrderById = async(req, res) => {
        const {id} = req.params;
        //console.log("hi"+id);
        const orderById =await orderModel.findById(id)
       // console.log(orderById );
        Access(res);
        res.status(200).send(orderById);
    }
    const editOrder =async (req, res, next) => {
        try{
        const  {id}= req.params;
        const {productName,productPrice,productDescription,productCategory,orderStatus,orderDate,orderRequester} = req.body;
        const updatedOrder = await orderModel.findByIdAndUpdate(id, {productName,productPrice,productDescription,productCategory,orderStatus,orderDate,orderRequester});
        Access(res);
        res.status(204).send(updatedOrder);
        }catch(error){
            next(error);
        }
    }


    const deleteOrder = async (req, res, next) => {
        const { id } = req.params;
        orderModel.findByIdAndDelete( id , function (err) {
            if (err) return handleError(err);
          });
          Access(res);
        res.status(204).send();
    }
    const addOrder = async (req, res, next) => {
        const {productName,productPrice,productDescription,productCategory,orderStatus,orderDate,orderRequester} = req.body;
        var newOrder = await orderModel.create({productName,productPrice,productDescription,productCategory,orderStatus,orderDate,orderRequester});
        Access(res);
        res.status(200).send(newOrder);
    };
module.exports={
        getAllOrders,
        getOrderById,
        editOrder,
        deleteOrder,
        addOrder 
    }


