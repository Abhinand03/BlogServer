const express= require('express')
const cors =require('cors')
require('dotenv').config()
require('./Connection/DB')
const router=require('./Routes/router')

const app =express()
const  PORT=4000


app.use(cors())

app.use(express.json())

app.use(router)


app.listen(PORT,()=>{
    console.log("Server is Running ",PORT);
})