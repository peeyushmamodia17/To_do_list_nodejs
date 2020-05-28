//add express
const express=require('express');
const path=require('path');
const port=8000;
const app=express();
//add mongoose by this databased connectivity is established
const db=require('./config/mongoose');

//add middleware for getting the form data
app.use(express.urlencoded());

//add the route file
app.use('/',require('./routes/home_route'));

//add view engine ejs for the frontent 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static('assets'));

//here it show server connectivity on port
app.listen(port,function(err){
    if(err){
        console.log("error",err);
    }
    console.log("server is running on port:" ,port);
})