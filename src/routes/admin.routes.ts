import { Router } from "express";
import { createAdmin } from "../controllers/admin.controllers";


const router = Router();


router.post("/", createAdmin);


export default router;