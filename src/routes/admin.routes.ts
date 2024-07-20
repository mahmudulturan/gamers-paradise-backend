import { Router } from "express";
import { createAdmin } from "../controllers/admin.controllers";
import verifyUser from "../middlewares/verifyUser";


const router = Router();


router.post("/", verifyUser("super-admin"), createAdmin);


export default router;