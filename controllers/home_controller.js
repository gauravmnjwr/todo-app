const TodoApp = require("../models/todo");

module.exports.home=function(req,res){
  TodoApp.find({},function(err,TodoApp){
    if(err){
      console.log('Error while fetching the data');
      return;
    }
    return res.render('home',{
      TodoApp:TodoApp
    });
  });
}