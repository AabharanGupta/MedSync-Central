import {Router} from "express";
import passport from "passport";
import {feedback} from "../controllers/authController.js";

const router= Router();

//Registeration route
router.post("/feedback",feedback)

export default router;