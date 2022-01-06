const mongoose= require('mongoose');

const todoSchema=new mongoose.Schema({
  description:{
    type:String,
    required:true
  },
  date:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  }
});

//Naming this database

const TodoApp = mongoose.model('TodoApp',todoSchema);

module.exports=TodoApp;