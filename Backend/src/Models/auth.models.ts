import mongoose, { Schema, Document } from 'mongoose';

// Define the user schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => {
        // Regular expression for email validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(value);
      },
      message: 'Invalid email format',
    },
  },
  password: {
    type: String,
    required: true,
  },
});

// Define the User interface to represent the document in TypeScript
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// Create and export the User model
export const UserModel = mongoose.model<IUser>('User', userSchema);
