import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    USERID: {type:String,required:true},
    ITEMS : {type: Array, required:true},
    AMOUNT: {type: Number, required: true},
    STATUS: {type: String, default: "Order Recieved"},
    DATE: {type: Date, default:Date.now()},
    ADDRESS: {type:Object, required:true}
})

const orderModel = mongoose.models.order || mongoose.model("order",orderSchema)
export default orderModel;
