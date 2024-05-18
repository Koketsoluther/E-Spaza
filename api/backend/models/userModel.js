import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    NAME:{type:String,required:true},
    EMAIL:{type:String,required:true,unique:true},
    cartData:{type:Object, default:{}}

},{minimize:false})

const userModel = mongoose.model.user || mongoose.model("user",userSchema)

export default userModel;