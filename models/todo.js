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
// module.exports.todoSchema=todoSchema;
//Naming this database
const TodoApp = mongoose.model('TodoApp',todoSchema);

// console.log(todoSchema.obj.description)

const queryAllUsers = () => {
  //Where User is you mongoose user model
  TodoApp.find({} , (err, users) => {
      if(err){
        
      } //do something...

      users.map(user => {
          //Do somethign with the userif
          console.log(user);
      })
  })
}
// queryAllUsers();

module.exports=TodoApp;