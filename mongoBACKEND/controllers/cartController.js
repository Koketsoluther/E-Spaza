
import userModel from "../models/userModel.js";

// add items to user cart
const addToCart = async (req,res) =>{
    try {
        let userData = await userModel.findOne({user_id:req.body.userId})
        let cartData  = await userData.cartData;
        console.log(cartData)
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        }
        else{
            cartData[req.body.itemId]+=1
        }
        console.log(cartData)
        console.log(userData)
        await userModel.findOneAndUpdate({user_id: req.body.userId},{cartData});
        res.json({success:true, message:"Added to Cart"});

    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }

}

// remove items from  user cart
const removeFromCart = async (req,res) =>{

    try {
        let userData = await userModel.findOne({user_id:req.body.userId})
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;}
            await userModel.findOneAndUpdate({user_id: req.body.userId},{cartData});
        res.json({success:true, message :"Removed from Cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message :"Error"})
    }

}

const getCart = async (req, res) =>{
    try {
        let userData = await userModel.findOne({user_id:req.body.userId});
        let cartData =await userData.cartData
        res.json({success: true, cartData: cartData})
    } catch (error) {
        console.log(error)
        res.json({success: false, message:"Error"})
    }
}

export {addToCart, removeFromCart, getCart}