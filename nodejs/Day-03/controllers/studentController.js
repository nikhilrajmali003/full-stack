
const Student=require('../controllers/studentController')
exports.addStudent=async(req,res)=>{
    try{
        console.log(req.body)
   const studentdata= await Student.create(req.body);
   if(studentdata)
    {
        res.status(201).json({
            data:studentdata
        })
    }
    }
    catch (error){
res.status(400).send(error)
    }
}