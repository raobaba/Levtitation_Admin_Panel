import express from "express";
const router = express.Router();
import {registerUser, loginUser} from '../Controllers/auth.controllers';

// Register a new user
router.post('/register', registerUser);

// User login
router.post('/login', loginUser);

export default  router;
