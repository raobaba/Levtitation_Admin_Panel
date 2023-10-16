import express from "express";
const authRouter = express.Router();
import {registerUser,logoutUser, loginUser} from '../Controllers/auth.controllers';

// Register a new user
authRouter.post('/register', registerUser);

// User login
authRouter.post('/login', loginUser);

//User logout
authRouter.post('/logout', logoutUser);

export default  authRouter;
