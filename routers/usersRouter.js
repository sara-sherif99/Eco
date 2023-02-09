const express = require('express');
const userValidation = require('../validation/userValidation');


const usersRouter = express.Router();
//const path= require ('path');
// const fsPromise =require('fs/promises');
// const fs =require('fs');

const {login, signup,getAllUsers,
    getUserById,
    deleteUser} = require('../controllers/userController');



usersRouter.get('/' ,getAllUsers);
usersRouter.get('/:id' ,getUserById);
usersRouter.delete('/:id' ,deleteUser);
usersRouter.post("/login",login );
usersRouter.post("/signup",userValidation,signup );
module.exports=usersRouter;