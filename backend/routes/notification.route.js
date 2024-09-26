import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  getNotifications,
  deleteNotification,
} from "../controllers/notifications.controller.js";

const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/delete/:id", protectRoute, deleteNotification);

export default router;
