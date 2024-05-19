import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


// login user
const loginUser = async (req,res)=>{
    const {EMAIL,PASSWORD} = req.body;
    try {
        const user = await userModel.findOne({EMAIL})
        if(!user){
            return res.json({success:false, message:"User does not exist"})
        }

        const isMatch = await bcrypt.compare(PASSWORD, user.PASSWORD)

        if(!isMatch){
            return res.json({success: false, message:"Invalid Credentials"})
        }

        const token = createToken(user._id);
        res.json({success:true, token: token});
    } catch (error) {
        console.log(error);
    }
}
const createToken = (id)=> {
    return jwt.sign({id},process.env.JWT_SECRET)
}
// register user

const registerUser = async (req,res)=>{
    const {NAME,PASSWORD,EMAIL} = req.body;
    try {
        // checking is user already exists
        const exist = await userModel.findOne({EMAIL})
        if(exist){
            return res.json({success: false, message:"User already exists"})
        }
        // validating email and strong password
        if(!validator.isEmail(EMAIL)){
            return res.json({success: false, message:"Not a valid email."})
        }
        if(PASSWORD.length < 8){
            return res.json({success: false, message:"Password is too short"})
        }

        // hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(PASSWORD,salt)

        const newUser = new userModel({
            NAME: NAME,
            EMAIL: EMAIL,
            PASSWORD: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true, token: token})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: "Error"})
    }
}

export {loginUser, registerUser}