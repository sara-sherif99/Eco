const productModel =require("../models/productModel");

function Access (res){
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
}

// router.get("/", (req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     res.setHeader("Access-Control-Max-Age", "1800");
//     res.setHeader("Access-Control-Allow-Headers", "content-type");
//     res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
// });

const getAllProducts = async (req, res) => {
const products = await productModel.find({})
Access(res);
res.status(200).send(products);
}

// //category filtering
// const getCategory = async(req, res) => {
// const {category} = req.params;
// const categoryProducts =await productModel.find({category})
// res.status(200).send(categoryProducts);
// }

// const getProductByPrice = async(req, res) => {
//     const {price} = req.params;
//     const ProductByPrice =await productModel.find({price})
//     res.status(200).send(ProductByPrice);
//     }

const getProductById = async(req, res) => {
    const {id} = req.params;
    //console.log("hi"+id);
    const productById =await productModel.findById(id)
    console.log(productById );
    Access(res);
    res.status(200).send(productById);
}

const editProduct =async (req, res, next) => {
    try{
    const  {id}= req.params;
    const {name,price,description,category,inStock} = req.body;
    const updatedProduct = await productModel.findByIdAndUpdate(id, {name,price,description,category,inStock});
    Access(res);
    res.status(204).send({message:"product updated"});
    }catch(error){
        next(error);
    }
}



//price filtering
const getByPrice = async(req, res) => {
    const {minPrice,maxPrice} = req.body;
    const priceProducts =await productModel.find().where('price').gte(minPrice).lte(maxPrice)
    res.status(200).send(priceProducts);
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Admin Methods
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const addProduct = async (req, res, next) => {
    const {name,price,description,category} = req.body;
    var newProduct = await productModel.create({ name,price,description,category, inStock:true });
    Access(res); 
    res.status(200).send(newProduct);
};

// const addProduct= async (req, res, next) => {
//     const {name,price,description,category} = req.body;
//     const newProduct = new productModel({ name,price,description,category, inStock:true });
//     newProduct.save(function (err) {
//         if (err) return handleError(err);
//         // saved!
//       });
//     res.status(204).send();
// }



const deleteProduct = async (req, res, next) => {
    const { id } = req.params;
    productModel.findByIdAndDelete( id , function (err) {
        if (err) return handleError(err);
      });
      Access(res);
    res.status(204).send();
}

     module.exports={
    getAllProducts,
    getProductById,
    // getCategory,
    // getProductByPrice,
    getByPrice,
    addProduct,
    editProduct,
    deleteProduct
}
