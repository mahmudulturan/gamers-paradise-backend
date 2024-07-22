import { Router } from "express";
import { bookingControllers } from "../controllers/booking.controller";
import verifyUser from "../middlewares/verifyUser";

const router = Router();

router.post("/", verifyUser("user"), bookingControllers.createBooking);

export default router;