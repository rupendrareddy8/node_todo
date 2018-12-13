var express=require('express');
var app=express();
var todo=require('./tasks/todo_list.js');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
mongoose.connect('add mongodb url & user_name & password',{ useNewUrlParser: true })
.then(()=>console.log('connection successful'))
.catch((err)=>console.error(err));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.get('/', function(req, res, next) {
  todo.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

app.post('/',function(req,res,next){
	console.log(req.body);
	todo.create(req.body,function(err,post){
		if(err) return next(err);
		res.json(post)
	});
	});
var server=app.listen(8888,function(){
	console.log('server has been started on port 8888 ')
});
