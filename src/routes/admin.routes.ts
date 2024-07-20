import { Router } from "express";
import { createAdmin, deleteAdmin } from "../controllers/admin.controllers";
import verifyUser from "../middlewares/verifyUser";


const router = Router();


router.post("/", verifyUser("super-admin"), createAdmin);


router.delete('/:id', verifyUser("super-admin"), deleteAdmin);


export default router;