const express=require('express');
const studentController=require('../controllers/studentController');
const router=express.Router();
router.post('/add_student',studentController.addStudent);
module.exports=router;
