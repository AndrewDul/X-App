import express from "express";
import { singup, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/singup", singup);

router.get("/login", login);

router.get("/logout", logout);
export default router;
