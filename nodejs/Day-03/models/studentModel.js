const mongoose=require('mongoose')
// Note step 2define the schema
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    age:{
        type:Number,
        required:true
    }
})

// step 3 create a model
const Student= mongoose.model('Student',studentSchema);

module.exports=Student;