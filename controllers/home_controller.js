// add todo_schema by require and give it in Todo  
const Todo=require('../models/Todo_schema'); 

// give home or / to route for print the data of home page
module.exports.home=function(req,res){

    Todo.find({},function(err,todo){
        if(err){
            console.log("error in fetching contact");
            return;
        }
        return res.render('index',{
            title:'Home Page',
            todolist:todo
    });

    });
}

// give route to create the todo data
module.exports.create=function(req,res){
    Todo.create({
        Description:req.body.name,
        Category:req.body.category,
        Date:req.body.date
    },function(err,newTodo){
        if(err){
            console.log("error in creating todolist");
            return;
        }
        return res.redirect('back');
    })
    
}

// give route to delete the task data
module.exports.delete=function(req,res){
    let id=req.body;
    for(let i in id){
        Todo.findByIdAndDelete(i,function(err){
            if(err){
                console.log("error in deleting");
                return;
            }
        });
    }
    return res.redirect('back');
}