import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  tags: [String],
  college: String,
  degree: String,
  year: Number,
  photo: String,
  relation: String
});

export default mongoose.model('User', userSchema);