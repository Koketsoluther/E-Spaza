import express from "express"
import { addproduct, listProducts,removeProduct } from "../controllers/productController.js"
import multer from "multer";

const productRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

productRouter.post("/add",upload.single("IMAGE"),addproduct)
productRouter.get("/list",listProducts)
productRouter.post("/remove",removeProduct)




export default productRouter;