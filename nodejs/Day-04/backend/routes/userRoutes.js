const express = require('express') ;
const userController = require('./../controllers/userController')

const router = express.Router() ;

router.post('/register',userController.register.signUp);
router.post('/login',userController.login.signIn);


module.exports = router ;