const Product=require('../models/productModel');
exports.getAllProducts=(req,res)=>{

}
exports.addProduct=(req,res)=>{
        try{
            const items=await Product.create(req.body);
            res.status(201).json({
                message:"Product Created Successfully",
                data:items
            })
        }
        catch(error)
        {

        }}
