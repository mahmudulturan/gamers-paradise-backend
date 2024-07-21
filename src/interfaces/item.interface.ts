import { Types } from "mongoose";


export interface ICategory {
    name: string,
    currency: string
}


// interface for inventory
export interface IInventory {
    quantity: number;
    inStock: boolean;
}

// interface for price
export interface IPrice {
    orginalPrice: number;
    discountPercentage: number;
}

//interface for itemSchema
export interface IItem {
    game: Types.ObjectId;
    price: IPrice;
    item_category: ICategory;
    item_count: string;
    bookings: Types.ObjectId[];
    inventory: IInventory;
    isDeleted: boolean;
}