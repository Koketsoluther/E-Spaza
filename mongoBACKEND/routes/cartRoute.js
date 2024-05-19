import expresss from "express";
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = new expresss.Router();

cartRouter.post("/add",addToCart)
cartRouter.post("/remove", removeFromCart)
cartRouter.post("/get", getCart)

export default cartRouter;