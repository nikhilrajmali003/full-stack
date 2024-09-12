const express = require('express') ;


const router = express.Router() ;


router.get('/allproducts') ;

const shoppingController=require('../controlls/ShoppingController')
router.get('allproducts',shoppingController.getAllProduct);

router.post('/addproduct',shoppingController.addProduct                     )
module.exports = router