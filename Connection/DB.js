const mongoose = require('mongoose')

const DB=process.env.DATA_BASE

mongoose.connect(DB,{}).then(()=>{
    console.log("MongoDB Connection Is success");
    
}).catch((err)=>{
    console.log("connection Failed",err);
    
})