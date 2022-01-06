const mongoose= require('mongoose');


//connecting mongoose

mongoose.connect('mongodb://localhost/todoapp');

const db=mongoose.connection;

//error handling

db.on('error',console.error.bind(console,'Error Connecting to db'));


//DB up and running

db.once('open',function(){
  console.log("Successfully connected to DB");
})