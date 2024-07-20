import { Types } from "mongoose";

//interface for itemSchema
export interface IItem {
    game: Types.ObjectId;
    price: {
        orginalPrice: number;
        discountedPrice: number;
    }
    item_category: string;
    item_count: number;
    bookings: Types.ObjectId[];
    inventory: {
        quantity: number;
        inStock: boolean;
    }
}