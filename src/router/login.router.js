import { Router, Router } from "express";
import { loginDeta } from "../controllers/login.controllers.js";

const router = Router();


app.use("/login").post(loginDeta);

export {router};