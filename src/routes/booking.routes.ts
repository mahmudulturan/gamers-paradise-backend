import { Router } from "express";
import { bookingControllers } from "../controllers/booking.controller";
import verifyUser from "../middlewares/verifyUser";

const router = Router();

router.post("/", verifyUser("user"), bookingControllers.createBooking);

router.patch("/:id", verifyUser("admin", "super-admin"), bookingControllers.updateBookingStatus);

router.delete("/:id", verifyUser("admin", "super-admin"), bookingControllers.deleteBooking);

router.get("/", verifyUser("admin", "super-admin"), bookingControllers.getAllBooking);

router.get("/:userId", verifyUser("user"), bookingControllers.getBookingsByUserId);

export default router;