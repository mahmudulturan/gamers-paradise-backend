import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import User from "../models/user.model";
import AppError from "../errors/AppError";
import Admin from "../models/admin.model";
import sendResponse from "../utils/sendResponse";

export const createAdmin = catchAsync(async (req: Request, res: Response) => {
    const data = req.body;
    const user = await User.findById(data.user);
    if (!user) {
        throw new AppError(404, "User Not Found!");
    }
    if (user.role == "admin") {
        throw new AppError(409, "User already is an admin!");
    }
    const newAdmin = await Admin.create(data);
    user.admin = newAdmin._id;
    user.role = "admin";
    await user.save();
    sendResponse(res, 201, "Admin created successfully!", user);
})