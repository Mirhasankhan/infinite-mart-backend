import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create-account", userController.addNewUser);
router.get("/current-user", userController.currentUser);
router.post("/login-account", userController.loginUser);
router.put("/update-user", userController.updateUserFromDB);

export const userRoutes = router;
