const express = require ("express");
//#1 Create a New Express Router 
const router = express.Router(); 

//#new route added 
router.get('/', (req,res)=>{
    res.send("This is the landing and welcome place")
})

//router object is exported 
module.exports =router;
