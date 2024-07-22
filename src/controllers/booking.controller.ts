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

export const bookingControllers = {
    createBooking
}