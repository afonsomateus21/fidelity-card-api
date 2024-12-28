import 'dotenv/config';
import express from 'express';
import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());

app.use('/auth/user', authRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ msg: "bem vindo" })
});

connectDB().then(() => {
  app.listen(3000, () => {
    console.log('Server running on port 3000.')
  });
  console.log("Connected to database");
});



