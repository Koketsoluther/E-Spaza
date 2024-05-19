import express from "express";
import { listShop, addShop } from "../controllers/shopController.js";

const shopRouter = express.Router()

shopRouter.get("/list", listShop)
shopRouter.post("/add", addShop)

export default shopRouter;