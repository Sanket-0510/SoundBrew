import mongoose from 'mongoose'



const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  confirmPassword: {
    type: String,
    required: true
  }
});

export const User = new mongoose.model("User", userSchema);
