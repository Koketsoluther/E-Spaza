import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js";
import productRouter from "./routes/productroute.js";
import userRouter from "./routes/userRoutes.js";
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import staffRouter from "./routes/staffRoute.js";
import shopRouter from "./routes/shopRoute.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDb();

// api endpoints
app.use("/api/products",productRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user", userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.use("/api/staff", staffRouter)
app.use("/api/shop", shopRouter)

app.get("/",(req,res)=>{
    res.send("hallo:D!!!!")
})

app.listen(port,()=>{
    console.log(`America Ya.. on http://localhost:${port}`)
})

// 