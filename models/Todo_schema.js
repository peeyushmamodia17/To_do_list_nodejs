// add the mongoose file
const mongoose=require('mongoose');

// make todoschema for todo list for different-different fields
const todoSchema=new mongoose.Schema({
    Description:{
        type: String,
        required:true
    },
    Category:{
        type: String,
        required: true
    },
    Date:{
        type:Date,
        required:true
    }
},
    {
        timestamps: true
    }
);

const Todo=mongoose.model('Todo',todoSchema);

module.exports=Todo;

