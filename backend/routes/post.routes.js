import express from "express";
import { createPost } from "../controllers/post.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/create", protectRoute, createPost);
// router.post("/like/:id", protectRoute, likeUnlikePost);
// router.post("/comment", protectRoute, commentOnPost);
// router.delete("/delete", protectRoute, deletePost);

export default router;
