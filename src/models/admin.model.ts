import mongoose, { model } from "mongoose";
import { IAdmin } from "../types/types";


const adminSchema = new mongoose.Schema<IAdmin>({
    user: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
}, {
    timestamps: true
})

const Admin = model<IAdmin>("Admin", adminSchema);

export default Admin;