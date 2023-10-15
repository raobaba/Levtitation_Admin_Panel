import { Request, Response } from "express";
import { UserModel } from "../Models/auth.models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register a new user
const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ error: err.message });
  }
};

// User login
const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Email is invalid" });
    }

    // Check if the password is valid
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Password is wrong" });
    }

    // Create a JWT token for the user
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h", // Token expiration time
    });

    // Respond with user data
    res.status(200).json({
      user: {
        token,
        name: user.name,
        email: user.email,
        id: user._id,
      }
    });
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ error: err.message });
  }
};

export { registerUser, loginUser };
