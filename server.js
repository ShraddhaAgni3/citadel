import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './Backend/Routes/Userroutes.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

mongoose.connect('mongodb+srv://shraddhaagni529:1234@citadel.eb3cs6s.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});