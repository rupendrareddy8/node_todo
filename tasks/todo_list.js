var mongoose=require('mongoose');
var todoSchema=new mongoose.Schema({
	todo_name:String,
	todo_description:String,
});

module.exports=mongoose.model('todo',todoSchema);