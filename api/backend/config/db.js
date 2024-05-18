import mongoose from "mongoose";

export const connectDb = async () =>{
    await mongoose.connect('mongodb+srv://2613184:database@cluster0.jtjgizb.mongodb.net/Project0').then(()=>{
        console.log("HALLO FROM DB :D")
    })
}