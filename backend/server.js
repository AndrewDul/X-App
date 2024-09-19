import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

console.log(process.env.MONGO_URI);

app.use("/api/auth", authRoutes);

app.listen(8080, () => {
  console.log(`Server is running on the ${PORT}`);
});
