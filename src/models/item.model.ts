import mongoose from "mongoose";
import { IItem } from "../types/types";

const itemSchema = new mongoose.Schema<IItem>({
    game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    item_type: {
        type: String,
        required: true
    },
    item_count: {
        type: Number,
        required: true
    },
    bookings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Booking"
        }],
    quantity: {
        type: Number,
        requred: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});


const Item = mongoose.model<IItem>("Item", itemSchema);

export default Item;