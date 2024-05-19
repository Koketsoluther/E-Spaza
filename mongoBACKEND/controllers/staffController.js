import staffModel from "../models/staffModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


// login user
const loginStaff = async (req,res)=>{
    const {EMAIL,PASSWORD} = req.body;
    try {
        const user = await staffModel.findOne({EMAIL})
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

const registerStaff = async (req,res)=>{
    const {NAME,SURNAME,PASSWORD,EMAIL,SHOP,ID} = req.body;
    try {
        // checking is user already exists
        const exist = await staffModel.findOne({EMAIL})
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

        if(ID.length != 13){
            return res.json({success: false, message:"Invalid ID number"})
        }

        // hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(PASSWORD,salt)

        const newStaff = new staffModel({
            NAME: NAME,
            SURNAME: SURNAME,
            EMAIL: EMAIL,
            PASSWORD: hashedPassword,
            ID: ID,
            SHOP: SHOP
        })

        const user = await newStaff.save()
        const token = createToken(user._id)
        res.json({success:true, token: token})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: "Error"})
    }
}
// list staff
const listStaff = async (req, res) => {
    try {
        const staff = await staffModel.find({})
        res.json({success:true, data: staff})
    } catch (error) {
        res.json({success:false, message: "Error"})
    }
}

export {loginStaff, registerStaff, listStaff}