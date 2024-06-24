import mongoose, { Schema } from "mongoose";
import { IUser } from "../types/types";

const userSchema: Schema = new mongoose.Schema({
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
    }
}, {
    timestamps: true
})

const User = mongoose.model<IUser>("User", userSchema);

export default User;