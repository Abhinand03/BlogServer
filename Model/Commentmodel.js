const mongoose=require('mongoose')

const commentschema=new mongoose.Schema({
    comments:{
        type:String
    },
    blog_id:{
        type:String
    },
    user_id:{
        type:String
    },username:{
        type:String
    }

})

const comment=mongoose.model('comments',commentschema)
module.exports=comment