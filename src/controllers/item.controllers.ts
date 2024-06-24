import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import Item from "../models/item.model";
import sendResponse from "../utils/sendResponse";

// controller for create item
const createItem = catchAsync(async (req: Request, res: Response) => {
    const itemData = req.body;
    const newItem = await Item.create(itemData);
    sendResponse(res, 201, true, "Item created successfully!", newItem);
})


// controller for create item
const getGameItems = catchAsync(async (req: Request, res: Response) => {
    const gameId = req.params.gameId;
    const items = await Item.find({ game: gameId });
    sendResponse(res, 200, true, "Items fetched successfully!", items);
})


export const itemControllers = {
    createItem,
    getGameItems
}