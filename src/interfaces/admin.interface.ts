import { Types } from "mongoose";

export interface IAdmin {
    user: Types.ObjectId;
    status: "active" | "deleted";
}