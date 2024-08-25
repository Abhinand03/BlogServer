const jwt=require('jsonwebtoken')

const jwtmiddlewarefun=(req,res,next)=>{
   
    // console.log(req);
    try{
        
        
        const token=req.headers.authorization.split(' ')[1]
        if(token){
            const result=jwt.verify(token,process.env.secret_key)
            req.payload=result.userId
            next()
        }
        else{
            res.status(406).json("please Login First")
        }
    }catch{
        res.status(406).json("please Login")
     
        

    }
   
}

module.exports=jwtmiddlewarefun