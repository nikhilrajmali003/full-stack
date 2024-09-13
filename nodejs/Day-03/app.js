// Note require the express
const express=require("express");
const app=express();
// console.log(app);    
const studentController=require('./models/studentModel')

// Note step 1
const mongoose=require("mongoose");
// Note to connect with the mongodb we call to use the mongoose.connect() method
mongoose.connect('mongodb://127.0.0.1:27017/studentdb').then(()=>{
    console.log("connected to the database");
}).catch((err)=>console.log((err)))



app.use(express.json());




// app.post('/add_student', studentController.addStudent)
app.use('api',require('./routes/studentRoutes'))



//listen is asynhcrounse function
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})