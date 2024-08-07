import mongoose from "mongoose";
import { ICategory, IInventory, IItem, IPrice } from "../interfaces/item.interface";

const priceSchema = new mongoose.Schema<IPrice>({
    orginalPrice: {
        type: Number,
        required: true
    },
    discountPercentage: {
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
}, {
    _id: false
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
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// itemSchema.virtual("discountedPrice").get(function () {
//     return (this.price.orginalPrice - this.price.discountPercentage);
// })

itemSchema.pre("findOne", function (next) {
    this.findOne({ isDeleted: { $ne: true } })
    next();
})


const Item = mongoose.model<IItem>("Item", itemSchema);

export default Item;