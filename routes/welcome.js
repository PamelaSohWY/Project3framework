const express = require ("express");
//#1 Create a New Express Router 
const router = express.Router(); 

//#new route added 
router.get('/', (req,res)=>{
    // res.send("This is the landing and welcome place")//this is for testing 
    //change this to render the index.hbs in welcome folder in views 
    res.render('welcome/index')
})

//router object is exported 
module.exports =router;
