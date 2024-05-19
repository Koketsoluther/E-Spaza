import productModel from "../models/productModel.js";
import fs from 'fs';


// add product

const addproduct = async (req,res)=> {

    let image_filename = `${req.file.filename}`;

    const product = new productModel({
        NAME: req.body.NAME,
        IMAGE: image_filename,
        PRICE: req.body.PRICE,
        CATEGORY: req.body.CATEGORY,
        STOCK: req.body.STOCK
    })

    try {
        await product.save();
        res.json({
            success: true,
            message: "Product Added"
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message:"Error"
        })
    }
}

// all products list
const listProducts = async (req,res)=>{
    try {
        const products = await productModel.find({});
        res.json({success:true, data: products})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

// remove product
const removeProduct = async (req,res) => {
    try {
        const product = await productModel.findById(req.body.id);
        fs.unlink(`uploads/${product.IMAGE}`,()=>{})
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:"Product removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//add stock of a product
const addStock = async (req, res)=>{
    try {
        const product = await productModel.findById(req.body.id);
        await productModel.findByIdAndUpdate(req.body.id,{STOCK: product.STOCK + req.body.STOCK})
        res.json({success:true, message:"Stock added"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
    
}

export {addproduct,listProducts,removeProduct,addStock};