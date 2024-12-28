import express from "express";
import { AuthController } from "../controllers/user/AuthController.js";
import { checkToken } from "../middlewares/checkToken.js";

const router = express.Router();
const authController = new AuthController();

router.get('/auth/user/register', checkToken, authController.register);

export default router;