import mongoose from "mongoose";
import { customerSchema } from "./schema.js";

export const Customer = mongoose.model('customer', customerSchema);
