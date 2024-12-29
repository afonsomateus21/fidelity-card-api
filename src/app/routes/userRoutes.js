import express from "express";
import { checkToken } from "../middlewares/checkToken.js";
import { UserController } from "../controllers/user/UserController.js";

const router = express.Router();
const userController = new UserController();

router.get('/users/:id', checkToken, userController.getUserById);

export default router