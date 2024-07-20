import { Types } from "mongoose";

//interface for gameSchemna
export interface IGame {
    name: string;
    image: string;
    route: string;
    description: string;
    categories: string[];
    items: Types.ObjectId[];
}
