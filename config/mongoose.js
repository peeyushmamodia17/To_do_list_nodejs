// add the mongoose file
const mongoose=require('mongoose');

// connect with the database and give it to name
mongoose.connect('mongodb://localhost/Todo_list_db');

const db=mongoose.connection;

// in this when database is not connect it don"t give error
db.on('error',console.error.bind(console,'error connecting to db'));

// when database is connected it give the message 
db.once('open',function(){
    console.log("Successfully connected to database");
});

module.exports=db;