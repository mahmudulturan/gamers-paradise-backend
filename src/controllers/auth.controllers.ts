import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from 'bcrypt';
import { IUser } from "../types/types";

const saltRounds = 10;

// controller for register a user
export const registerUser = async (req: Request & { body: IUser }, res: Response, next: NextFunction) => {
    try {
        const { name, email, password: passwordFromBody, ...rest } = req.body;

        // find the user if exist return a message
        const isUserExist = await User.findOne({ email: email });
        if (isUserExist) {
            return res.status(409).send({ success: false, error: "This email already exist!" })
        }

        // hashing the password before saving database 
        bcrypt.hash(passwordFromBody, saltRounds, async (err, password) => {
            try {
                const newUser = new User({
                    name,
                    email,
                    password,
                    ...rest
                })
                await newUser.save();
                res.status(201).send({ success: true, message: "User registered successfully!" });
            } catch (error) {
                next(error);
            }
        })
    } catch (error) {
        next(error);
    }
}

