const express = require("express");
//yarn add on 12 Jul
const hbs = require("hbs");
//yarn add on 12 Jul
const wax = require("wax-on");
//yarn add wax-on on 12 Jul
require("dotenv").config();
//yarn add dotenv on 12 Jul

// create an instance of express app
let app = express();

// set the view engine
app.set("view engine", "hbs");

// static folder
app.use(express.static("public"));

// setup wax-on
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

// enable forms
app.use(
  express.urlencoded({
    extended: false
  })
);

//import in routes 
const welcomeRoutes = require ('./routes/welcome');
//welcomeRoutes is the router object to export out the landing.js file 

async function main() {
//   app.get('/', (req,res) => {
// res.send("connected") //This is just used to test that can be connected
app.use('/', welcomeRoutes);
}

main();

app.listen(3000, () => {
  console.log("Server has started");
});