import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
    NAME:{type:String,required:true},
    SURNAME:{type:String,required:true},
    EMAIL:{type:String,required:true,unique:true},
    PASSWORD:{type:String, required:true},
    SHOP: {type:String, required:true},
    ID: {type:String ,required:true}
})

const staffModel = mongoose.model.staff || mongoose.model("staff",staffSchema)

export default staffModel;