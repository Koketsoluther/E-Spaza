import express from "express"
import { registerStaff, loginStaff, listStaff} from "../controllers/staffController.js"

const staffRouter = express.Router()

staffRouter.post("/register",registerStaff)
staffRouter.post("/login",loginStaff)
staffRouter.get("/list", listStaff)

export default staffRouter;