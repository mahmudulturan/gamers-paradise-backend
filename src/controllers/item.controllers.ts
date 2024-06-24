import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import Item from "../models/item.model";

// controller for create item
const createItem = catchAsync(async (req: Request, res: Response) => {
    const itemData = req.body;
    const newItem = await Item.create(itemData);
    res.status(201).send({ success: true, message: "Item created successfully!", item: newItem });
})


export const itemControllers = {
    createItem
}