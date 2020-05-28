const express=require('express');
const path=require('path');
const port=8000;
const app=express();
const db=require('./config/mongoose');
app.use(express.urlencoded());
app.use('/',require('./routes/home_route'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static('assets'));


app.listen(port,function(err){
    if(err){
        console.log("error",err);
    }
    console.log("server is running on port:" ,port);
})