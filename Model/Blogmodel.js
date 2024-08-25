const mongoose = require('mongoose')

const blogscema = new mongoose.Schema({
    userId: {
        type: String
    },
    heading: {
        type: String
    },
    content: {
        type: String
    },
    time:{
        type:Date,
        default:Date.now
    },
    username:{
        type:String
    }

})

const blog= mongoose.model('blogs',blogscema)
module.exports=blog