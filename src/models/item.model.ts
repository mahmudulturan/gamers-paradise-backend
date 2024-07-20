import mongoose from "mongoose";
import { IItem } from "../interfaces/item.interface";


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
    item_category: {
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
    inventory: {
        type: Number,
        requred: true
    }
}, {
    timestamps: true
});


const Item = mongoose.model<IItem>("Item", itemSchema);

export default Item;