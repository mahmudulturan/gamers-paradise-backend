import { ObjectId } from "mongoose";

//interface for userSchema
export interface IUser extends Document {
    name: string;
    email: string;
    image?: string;
    password?: string;
    googleId?: string;
    role: string;
    admin?: ObjectId;
    superAdmin?: ObjectId;
    bookings?: ObjectId[];
}

//interface for cookie options
export interface ICookieOptions {
    httpOnly: boolean;
    sameSite: "strict" | "lax" | "none" | boolean;
    secure: boolean;
    maxAge?: number;
    expires?: Date;
}

//interface for gameSchemna
export interface IGame {
    name: string;
    image: string;
    route: string;
    description: string;
}

//interface for itemSchema
export interface IItem {
    game: ObjectId;
    price: number;
    item_type: string;
    item_count: number;
    bookings: ObjectId[];
    quantity: number;
    inStock: boolean;
}