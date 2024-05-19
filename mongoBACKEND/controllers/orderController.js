import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// place order on frontend

const placeOrder = async (req, res)=>{
    
    try {
        const newOrder = new orderModel({
            USERID: req.body.userId,
            ITEMS: req.body.ITEMS,
            AMOUNT : req.body.AMOUNT,
            ADDRESS: req.body.ADDRESS
        })

        await newOrder.save()
        await userModel.findOneAndUpdate({user_id: req.body.userId},{cartData:{}});

        res.json({success: true, message:"Order Recieved"})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}


// user orders for front end
const userOrders = async (req,res)=>{
    try {
        const orders = await orderModel.find({USERID:req.body.userId})
        res.json({success:true, data:orders})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

// list orders for admin and staff
const listOrders = async (req,res) =>{
    try {
        const orders = await orderModel.find({});
        console.log(orders)
        res.json({success: true, data:orders})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: "Error"})
    }
}

// api for updating order status and set shop fufilling order
const updateStatus = async (req,res)=>{
    try {
        
        await orderModel.findByIdAndUpdate(req.body.orderId,{STATUS: req.body.STATUS})
        res.json({success:true, message: "Order Status Updated"})
        
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}

export {placeOrder, userOrders,listOrders,updateStatus}