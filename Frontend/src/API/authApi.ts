import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth", // Adjust the API base URL
});

export const registerUser = (name: string, email: string, password: string) => {
  return api.post("/register", { name, email, password });
};

export const authenticate = (email: string, password: string) => {
  return api.post("/login", { email, password });
};
