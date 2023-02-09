const userModel =require("../models/userModel");
const userValidation = require('../validation/userValidation');
const { hashPassword, comparePassword, userToken } = require('../userHelper');
const { custom } = require('joi');
const customError = require('../customError');

  //session 5 code 
// userRouter.post("/login",userValidation, async (req,res,next)=>
// {
//     try{
//         const {name, password}= req.body;
//         const user = await userModel.findOne({name});
//        if (!user) throw customError(401,"invalid username or password")
//         await comparePassword(password,user.password)
//         res.status(200).send("logged in successfully")
//     }catch (error){
//         next(error);
//     }
// })
function Access (res){
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
}

login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    await comparePassword(password, user.password);
    if (user){
      var id = user.id;
      const token=await userToken( id );
      res.status(200).send({message: 'Logged in',token});
    }
    else 
    {
      res.status(401).send({message:'Invalid user or password'});
    }
  } catch (error) {
    res.status(401).send({message:'Invalid user or password'});
    //next(error);
  }

};

//session 5 code 
// userRouter.post("/",userValidation, async (req,res,next)=>
// {
//     const {name, age, password}= req.body;
//     const hashedPassword = await hashPassword(password)
//     try{
//         await userModel.create({
//             name,
//             age,
//             password: hashedPassword
//         })
//         res.status(200).send("user added successfully");
//     }catch (error){
//         next(error);
//     }
// })

signup = async (req, res, next) => {
  try {
    const { userName, email, password ,gender} = req.body;
    const userExist =await userModel.findOne({ email }); 
    if(userExist){  
      res.status(401).send({message:'This email is already used'});
    }
    else{
      const hashedPassword = await hashPassword(password);
      var user = await userModel.create({userName, email,password:hashedPassword,gender});
      var id = user.id;
      const token=await userToken(id );
      res.status(200).send({message: 'Signed up',token});
    }
    
  }
  catch (error) {
    res.status(401).send({message:'Can not sign up'});
    //next(error);
  }

};
const getAllUsers = async (req, res) => {
  const users = await userModel.find({})
  Access(res);
  res.status(200).send(users);
  }

  const getUserById = async(req, res) => {
    const {id} = req.params;
    //console.log("hi"+id);
    const userById =await userModel.findById(id)
    console.log(userById );
    Access(res);
    res.status(200).send(userById);
}

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  userModel.findByIdAndDelete( id , function (err) {
      if (err) return handleError(err);
    });
    Access(res);
  res.status(204).send();
}

//we need to edit user data using patch request after we handle token issue 

module.exports={
   login,
   signup,
   getAllUsers,
   getUserById,
   deleteUser
}
