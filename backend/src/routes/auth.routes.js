import { Router } from "express"
import { signIn } from "../controllers/auth.controller.js"

export const authRouter = Router()

authRouter.post('/login', signIn)