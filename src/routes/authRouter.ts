import {Router} from "express";
import { container } from "../composition-root";
import { AuthController } from "../controllers/authController";

const authController = container.resolve(AuthController)

export const authRouter = Router({})

authRouter.post('/signin', 
        authController.signin.bind(authController))

authRouter.post('/signin/new_token', 
        authController.newToken.bind(authController))

authRouter.post('/signup', 
        authController.signup.bind(authController))

authRouter.get('/info', 
        authController.info.bind(authController))

authRouter.get('/logout', 
        authController.logout.bind(authController))