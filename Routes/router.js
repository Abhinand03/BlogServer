const express=require('express')
const usercontroller=require('../Controllers/usercontroller')
const blogcontroller=require('../Controllers/Blogcontroler')
const commetcontroller=require('../Controllers/Commentcontroller')
const jwtmiddleware=require('../Jwt/jwt')

const router= express.Router()
// user register route 
router.post('/reg',usercontroller.register)
// user logn route
router.post('/log',usercontroller.userlogin)

// add blog route
router.post('/add',jwtmiddleware, blogcontroller.addblogs)

// allblogs view
router.get('/allblog',jwtmiddleware,blogcontroller.allblog)
 
//user wise blog view
router.get('/userblog/:userId',jwtmiddleware,blogcontroller.userblog)

// edit blog deatils
router.put('/edit',blogcontroller.editblog)

//delete blog
router.delete('/delt/:blog_id',blogcontroller.deleteblog)

//add comments
router.post('/adcomment',commetcontroller.addcomment)

//get comments
router.get('/getcomment/:blog_id',commetcontroller.getcomments)

//comment delte
router.delete('/deltcomm/:blog_id',commetcontroller.deltcomm)



module.exports=router