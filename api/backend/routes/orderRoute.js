import express from "express";
import authMiddleware from "../middleware/auth.js";
import { listOrders, placeOrder, updateStatus, userOrders, verfiyOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place",placeOrder)
orderRouter.post("/verfiy",verfiyOrder)
orderRouter.post("/userorders",userOrders)
orderRouter.get("/list",listOrders)
orderRouter.post("/status", updateStatus)

export default orderRouter;
