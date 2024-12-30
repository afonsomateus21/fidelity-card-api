import mongoose from "mongoose";
import { serviceSchema } from "./schema.js";

export const Service = mongoose.model('service', serviceSchema);
