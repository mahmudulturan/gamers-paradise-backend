import { Types } from "mongoose";

export interface ICategory {
    name: string;
    items: Types.ObjectId[];
}

//interface for gameSchemna
export interface IGame {
    name: string;
    image: string;
    route: string;
    description: string;
    categories: ICategory[];
    isDeleted: boolean;
}
