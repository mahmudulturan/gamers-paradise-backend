import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import Booking from "../models/booking.model";
import sendResponse from "../utils/sendResponse";


const createBooking = catchAsync(async (req: Request, res: Response) => {
    const { status, ...data } = req.body;
    const newBooking = await Booking.create(data);
    sendResponse(res, 201, "Booking successfull!", newBooking);
})

export const bookingControllers = {
    createBooking
}