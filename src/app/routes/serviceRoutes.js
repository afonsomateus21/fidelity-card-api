import express from "express";
import { checkToken } from "../middlewares/checkToken.js";
import { OfferedServiceController } from "../controllers/OfferedServiceController.js";

const router = express.Router();
const offeredServiceController = new OfferedServiceController();

router.post('/services', checkToken, offeredServiceController.register);
router.get('/services', checkToken, offeredServiceController.getServices);

export default router