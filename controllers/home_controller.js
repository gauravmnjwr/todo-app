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
let arr = new Set();
module.exports.getid=function (req, res) {
  var id= req.query.id; 
  arr.add(id);
  // res.redirect("/");
  // return;
}
module.exports.remove = function(req, res){ 
  for(let i of arr){
    TodoApp.findByIdAndDelete(i,function(err){
      return;
    })
    
  }
  arr.clear();
  return res.redirect('back');
}