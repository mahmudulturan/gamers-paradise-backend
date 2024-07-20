import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema: Schema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: [true, "Name is missing, It must be required!"],
    },
    email: {
        type: String,
        required: [true, "Email is missing, It must be required!"],
        unique: true,
    },
    image: {
        type: String,
    },
    password: {
        type: String,
        required: false,
        select: false
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true,
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin"
    },
    bookings: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Bookings"
    }
}, {
    timestamps: true
})

const User = mongoose.model<IUser>("User", userSchema);

export default User;