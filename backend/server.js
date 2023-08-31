const express = require('express')
const colors = require('colors') //not required
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddle')
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const app = express()
//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//user resource
connectDB()
//.... use goalRoutes to handle any endpoints that end with /api/hoals
app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () =>{
    console.log(`server started on ${port}`);
})