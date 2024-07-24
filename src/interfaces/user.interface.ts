import { Types } from "mongoose";

//interface for userSchema
export interface IUser extends Document {
    name: string;
    email: string;
    image?: string;
    password?: string;
    googleId?: string;
    role: string;
    admin?: Types.ObjectId;
    superAdmin?: Types.ObjectId;
    bookings?: Types.ObjectId[];
}
