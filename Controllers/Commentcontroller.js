const comment=require('../Model/Commentmodel')

exports.addcomment=async(req,res)=>{
    const {user_comment,blog_id,user_id,username}=req.body

    try{

        const newcomment= new comment({
            comments:user_comment,blog_id,user_id,username
        })
        await newcomment.save()
        res.status(200).json(newcomment)
    }
    catch(err){
        console.log(err)
        
    }
    
}

exports.getcomments=async(req,res)=>{
    const {blog_id}=req.params
    try{
        const result = await comment.find({blog_id})
        res.status(200).json(result)
    }
    catch(err)
    {
        console.log(err);
        
    }

}

exports.deltcomm=async(req,res)=>{
    const {blog_id}=req.params
    try{
        const result=await comment.findByIdAndDelete({_id:blog_id})
        res.status(200).json(result)
    }
    catch(err){
        
    }
}