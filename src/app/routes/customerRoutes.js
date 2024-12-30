import express from "express";
import { checkToken } from "../middlewares/checkToken.js";
import { CustomerController } from "../controllers/CustomerController.js";

const router = express.Router();
const customerController = new CustomerController();

router.post('/customers', checkToken, customerController.register);

export default router