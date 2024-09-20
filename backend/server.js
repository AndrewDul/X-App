import express from "express";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";

import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json()); // to parse req.body, for parsing application/json
// console.log(process.env.MONGO_URI);
app.use(express.urlencoded({ extended: true })); //To parse from data (url encoded) - POSTMAN
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on the ${PORT}`);
  connectMongoDB();
});
