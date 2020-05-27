const express=require('express');
const path=require('path');
const port=8000;

const app=express();


app.listen(port,function(err){
    if(err){
        console.log("error",err);
    }

    console.log("server is running on port:" ,port);
})