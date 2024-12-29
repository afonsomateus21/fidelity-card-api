import { Schema } from "mongoose";

export const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  type: { type: String, enum: ['SYSADMIN', 'ADMIN', 'EMPLOYEE'] },
});