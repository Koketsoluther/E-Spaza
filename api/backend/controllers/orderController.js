import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
// place order on frontend

const placeOrder = async (req, res)=>{
    const frontend_url = "http://localhost:5173"
    try {
        const newOrder = new orderModel({
            USERID: req.body.userId,
            ITEMS: req.body.ITEMS,
            AMOUNT : req.body.AMOUNT,
            ADDRESS: req.body.ADDRESS
        })

        await newOrder.save()
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

        
        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"zar",
                product_data:{
                    name: item.NAME
                },
                unit_amount:item.PRICE*100

            }, 
            quantity: item.quantity
        }))

        line_items.push({
            price_data:{
                currency:"zar",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount: 15
            },
            quantity: 1
        })

        const session = await stripe.checkout.create({
            line_items: line_items,
            mode: payment,
            success_url:`${frontend_url}/verfiy?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verfiy?success=false&orderId=${newOrder._id}`
        })

        res.json({success: true, session_url: session.url})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}
const verfiyOrder = async (req,res) =>{
    const {orderId, success} = req.body;
    try {
        if(success=="true"){
            await orderModel.findByIdAndUpdate(orderId,{PAYMENT:true})
            res.json({success:true, message:"Paid :D"})
        }
        else{
            await orderId.findByIdAndDelete(orderId);
            res.json({success: false, message: "Payment Cancelled"})
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"})
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
        res.json({success: true, data:orders})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: "Error"})
    }
}

// api for updating order status
const updateStatus = async (req,res)=>{
    try {
        await orderModel.findByIdAndUpdate(req.body,orderId,{STATUS: req.body.status})
        res.json({success:true, message: "Order Status Updated"})
    } catch (error) {
        console.loge(error)
        res.json({success: false, message: "Error"})
    }
}

export {placeOrder, verfiyOrder, userOrders,listOrders,updateStatus}