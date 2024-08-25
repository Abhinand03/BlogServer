const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique: true,
        
    }
})

const user = mongoose.model('users',userschema)
module.exports=user