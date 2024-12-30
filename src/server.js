import 'dotenv/config';
import express from 'express';
import { connectDB } from './app/config/db.js';
import authRoutes from './app/routes/authRoutes.js';
import userRoutes from './app/routes/userRoutes.js';
import customerRoutes from './app/routes/customerRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/auth/user', authRoutes);
app.use('/api', userRoutes);

app.use('/api', customerRoutes);

app.get('/api', (req, res) => {
  res.status(200).json({ msg: "bem vindo" })
});

connectDB().then(() => {
  app.listen(3000, () => {
    console.log('Server running on port 3000.')
  });
  console.log("Connected to database");
});



