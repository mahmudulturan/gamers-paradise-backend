import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";



// controller for get the current user
const currentUser = catchAsync(async (req: Request, res: Response) => {
    res.status(200).send({ success: true, user: req.user });
})



export const userControllers = {
    currentUser
}