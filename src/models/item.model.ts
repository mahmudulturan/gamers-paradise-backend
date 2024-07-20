import mongoose from "mongoose";
import { ICategory, IInventory, IItem, IPrice } from "../interfaces/item.interface";

const priceSchema = new mongoose.Schema<IPrice>({
    orginalPrice: {
        type: Number,
        required: true
    },
    discountedPrice: {
        type: Number,
        required: true
    }
}, {
    _id: false
})

const categorySchema = new mongoose.Schema<ICategory>({
    name: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    }
})


const inventorySchema = new mongoose.Schema<IInventory>({
    quantity: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    _id: false
})


const itemSchema = new mongoose.Schema<IItem>({
    game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game",
        required: true
    },
    price: {
        type: priceSchema,
        required: true
    },
    item_category: {
        type: categorySchema,
        required: true
    },
    item_count: {
        type: String,
        required: true
    },
    bookings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Booking"
        }],
    inventory: {
        type: inventorySchema,
        requred: true
    }
}, {
    timestamps: true
});


const Item = mongoose.model<IItem>("Item", itemSchema);

export default Item;