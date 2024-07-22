import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import User from "../models/user.model";
import AppError from "../errors/AppError";
import Admin from "../models/admin.model";
import sendResponse from "../utils/sendResponse";

const createAdmin = catchAsync(async (req: Request, res: Response) => {
    const data = req.body;
    const user = await User.findById(data.user);
    if (!user) {
        throw new AppError(404, "User Not Found!");
    }
    if (user.role == "admin" || user.role == "super-admin") {
        throw new AppError(409, "User already is an admin!");
    }
    const newAdmin = await Admin.create(data);
    user.admin = newAdmin._id;
    user.role = "admin";
    await user.save();
    sendResponse(res, 201, "User is promoted to an Admin role!", user);
})


const deleteAdmin = catchAsync(async (req: Request, res: Response) => {
    const adminId = req.params.id;
    const admin = await Admin.findByIdAndDelete(adminId);

    if (!admin) {
        throw new AppError(404, "Admin not found!");
    }
    const user = await User.findById(admin.user);

    if (!user) {
        throw new AppError(404, "User not found!");
    }

    user.role = "user";
    // user.admin = null;
    await user.save();

    sendResponse(res, 201, "User is demoted to an User role!", user);

})


export const adminControllers = {
    createAdmin,
    deleteAdmin
}