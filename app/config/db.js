import mongoose from "mongoose";

export function connectDB() {
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASSWORD;

  return mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.bjwk4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );
}