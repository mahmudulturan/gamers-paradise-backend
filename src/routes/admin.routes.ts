import { Router } from "express";
import verifyUser from "../middlewares/verifyUser";
import { adminControllers } from "../controllers/admin.controllers";


const router = Router();


router.post("/", verifyUser("super-admin"), adminControllers.createAdmin);


router.delete('/:id', verifyUser("super-admin"), adminControllers.deleteAdmin);


export default router;