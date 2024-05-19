import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    NAME: {type:String, require:true},
    PRICE: {type:Number, require:true},
    IMAGE: {type:String, require:true},
    CATEGORY: {type:String, require:true},
    STOCK: {type: Number,require:true}
})

const productModel = mongoose.models.product || mongoose.model("product",productSchema)

export default productModel;