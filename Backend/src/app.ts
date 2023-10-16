import express from "express";
import ejs from "ejs";
import dotenv from "dotenv";
import cors from "cors";
import Connection from "./Config/db";
import authRouter from './Route/auth.route';
import formRouter from "./Route/form.route";
dotenv.config();
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send("testing");
});
app.use('/api/auth',authRouter);
app.use('/api/form',formRouter);
const PORT = process.env.PORT || 3000;
Connection();
app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
