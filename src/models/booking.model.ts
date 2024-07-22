import mongoose, { model } from "mongoose";
import { IBooking } from "../interfaces/booking.interface";

const bookingSchema = new mongoose.Schema<IBooking>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Item",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["confirmed", "delivered", "canceled"],
        default: "confirmed"
    },
    gameIdInfo: {
        type: String,
        required: true
    },
    paymentInfo: {
        type: mongoose.Schema.Types.ObjectId,
        default: "669badb6647fb3981090be17"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})


const Booking = model<IBooking>("Booking", bookingSchema);


export default Booking;