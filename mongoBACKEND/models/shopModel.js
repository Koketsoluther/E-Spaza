import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({
    NAME:{type:String,required:true},
    ADDRESS: {type:String,required:true},
    SHOPOWNER: {type:String,required:true}
})

const shopModel = mongoose.model.shop || mongoose.model("shop",shopSchema)

export default shopModel;