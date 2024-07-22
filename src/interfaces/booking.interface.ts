import { Types } from "mongoose";

export interface IBooking {
    user: Types.ObjectId;
    items: Types.ObjectId[];
    price: number;
    status: "confirmed" | "delivered" | "canceled";
    idInfo: string;
    paymentInfo: Types.ObjectId;
}