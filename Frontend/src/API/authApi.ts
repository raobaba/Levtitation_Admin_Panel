import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth", // Adjust the API base URL
});

// Registration (Sign Up) Function
export const registerUser = (name: string, email: string, password: string) => {
  return api.post("/register", { name, email, password });
};

// Login Function
export const authenticate = (email: string, password: string) => {
  return api.post("/login", { email, password });
};
