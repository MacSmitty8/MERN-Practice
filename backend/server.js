console.log('Hello World')
const express = require('express')
const dotenv = require('dotenv').config
const {errorHandler} = require('./middleware/errorMiddle')
const port = process.env.PORT || 5000

const app = express()
//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//user resource

//....


app.listen(port, () =>{
    console.log(`server started on ${port}`);
})