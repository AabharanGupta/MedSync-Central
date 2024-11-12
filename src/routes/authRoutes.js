import {Router} from "express";
import passport from "passport";
import { register,login,logout,setup2FA,verify2FA,authStatus,reset2FA } from "../controllers/authController.js";

const router= Router();

//Registeration route
router.post("/register",register)

//Login Route
router.post("/login",login)

//Auth Status Route
router.get("/status",authStatus)

//Logout Route
router.post("/logout",logout)

//2FA Setup Route
router.post("/2fa/setup",setup2FA)

//2FA Setup Route
router.post("/2fa/verify",verify2FA)

//Reset 2FA Route
router.post("/2fa/reset",reset2FA)

export default router;