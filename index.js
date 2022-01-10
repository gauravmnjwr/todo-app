const express= require('express');
const mongoose= require('mongoose')

const port= 8000;
const db=require('./config/mongoose');

const TodoApp= require('./models/todo');


const app = express();
app.use(express.urlencoded());
app.use(express.static('./assets'));
//sending route to all
app.use('/',require('./routes'));

//setting up ejs
app.set('view engine','ejs');
app.set('views','./views');

//post from form

app.post('/create-todo',function(req,res){
  console.log(req.body);
  TodoApp.create({
    description:req.body.description,
    date:req.body.date,
    category:req.body.category,
  },function(err,newTodo){
    if(err){
      console.log(req.body.check)
      console.log("Error Creating a contact");
      return;
    }
    // console.log('**********',newTodo)
    return res.redirect('back');
  })
})


//Port Listen Config

app.listen(port,function(err){
  if(err){
    console.log(err,"PORT ERROR");
    return;
  }
  console.log("Running Succsesfully On PORT",port);
});