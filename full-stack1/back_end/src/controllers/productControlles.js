import productModel from "../models/productModel.js";

const createProduct = async(req,res)=>{
    const {name,price,category} = req.body;
    const product = await productModel.create({name,price,category});
    
    console.log(product);
    
}

export default createProduct;