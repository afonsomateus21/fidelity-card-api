import { Schema } from "mongoose";

export const serviceSchema = new Schema({
  title: String,
  description: String,
});