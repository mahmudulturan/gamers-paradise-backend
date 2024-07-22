import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import Booking from "../models/booking.model";
import sendResponse from "../utils/sendResponse";
import Item from "../models/item.model";
import AppError from "../errors/AppError";
import User from "../models/user.model";


const createBooking = catchAsync(async (req: Request, res: Response) => {
    const { status, items, user, ...data } = req.body;
    const isUserExist = await User.findById(user);
    if (!isUserExist) {
        throw new AppError(404, "User not found!");
    }
    // if (isUserExist.email != req.user.email) {
    //     throw new AppError(401, "Unauthorized access");
    // }
    for (let i = 0; i < items.length; i++) {
        const item = await Item.findById(items[i]);
        if (!item) {
            throw new AppError(404, "Item not found!");
        }
    }
    const newBooking = await Booking.create({ user, items, ...data });
    sendResponse(res, 201, "Booking successfull!", newBooking);
})

const updateBookingStatus = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const { status } = req.body;
    const booking = await Booking.findById(id);
    if (!booking) {
        throw new AppError(404, "Booking not found!");
    }

    if (status) {
        booking.status = status;
    }

    await booking.save();
    sendResponse(res, 201, "Booking successfull!", booking);
})

const deleteBooking = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const booking = await Booking.findById(id);
    if (!booking) {
        throw new AppError(404, "Booking not found!");
    }
    booking.isDeleted = true;
    await booking.save();
    sendResponse(res, 201, "Booking deleted", null);
})

export const bookingControllers = {
    createBooking,
    updateBookingStatus,
    deleteBooking
}