const express = require ("express");
//#1 Create a New Express Router 
const router = express.Router(); 

//ROUTEST TO BE ADDED 
router.get('/', (req,res)=>{
    // res.send("This is the landing and welcome place")//this is for testing 
    //change this to render the index.hbs in welcome folder in views 
    res.render('welcome/index')
})
//new route to contactcompany.hbs in welcome folder 
router.get('/contactcompany', (req,res)=> { //the params
    res.render('welcome/contactcompany') //the folder/file name
})

//new route to aboutcompany.hbs in welcome folder 
router.get('/aboutcompany', (req,res) => {
    res.render('welcome/aboutcompany')
})

//router object is exported 
module.exports =router;
