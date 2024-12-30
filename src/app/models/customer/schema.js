import { Schema } from "mongoose";

export const customerSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  starsAmount: Number  
});