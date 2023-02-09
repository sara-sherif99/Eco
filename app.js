// Express 
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const usersRouter = require('./routers/usersRouter');
const productsRouter = require('./routers/productsRouter')
const app = express()
const port = 3000

app.use(express.json());
app.use(cors());

app.use('/user',usersRouter);
app.use('/product',productsRouter);
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/eco').then( ()=> {
    console.log("connected to databse succesfully")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




