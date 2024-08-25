const blog = require('../Model/Blogmodel')


// add an new blog
exports.addblogs = async (req, res) => {
    const { userId, heading, content, username } = req.body
    try {


        const newblog = new blog({
            userId, heading, content, username
        })
        await newblog.save()
        res.status(201).json(newblog)
    }
    catch (err) {
        console.log(res);
        res.status(406).json(err)

    }

}


// view all blog
exports.allblog = async (req,res) => {
    try {

        const result = await blog.find()
        res.status(200).json(result)
    }
    catch (err) {
        console.log(err);
        res.status(406).json(err)

    }
}


//user blogs
exports.userblog=async(req,res)=>{
    try{
        const {userId}=req.params     
        const result= await blog.find({userId})
        res.status(200).json(result)
    }
    catch(err){
        console.log(err);
        
    }


}

exports.editblog=async(req,res)=>{
    const {heading,content,blog_id}=req.body

    
    try{

        const result = await blog.findByIdAndUpdate({_id:blog_id},{heading,content},{new:true})
        await result.save()
        res.status(200).json(result)
    }
    catch(err){
        console.log(err);
        
    }

}

exports.deleteblog=async(req,res)=>{
    const {blog_id}=req.params
    try{
        const result = await blog.findByIdAndDelete({_id:blog_id})
        res.status(200).json(result)
    }
    catch(err)
    {
        console.log(err);
        
    }
    
}