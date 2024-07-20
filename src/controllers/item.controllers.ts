import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import Item from "../models/item.model";
import sendResponse from "../utils/sendResponse";
import Game from "../models/game.model";
import AppError from "../errors/AppError";

// controller for create item
const createItem = catchAsync(async (req: Request, res: Response) => {
    const itemData = req.body;
    const game = await Game.findById(itemData.game);
    if (!game) {
        throw new AppError(404, "Game Not Found");
    }

    // if category not exist then throw an error
    const isCategoryExist = game.categories.find(category => itemData.item_category.name == category);
    if (!isCategoryExist) {
        throw new AppError(404, "Category Not Found");
    }


    const newItem = await Item.create(itemData);
    game.items.push(newItem._id);
    await game.save();
    sendResponse(res, 201, "Item created successfully!", newItem);
})


// controller for get Game Items item
const getGameItems = catchAsync(async (req: Request, res: Response) => {
    const gameId = req.params.gameId;
    const items = await Item.find({ game: gameId });
    sendResponse(res, 200, "Items fetched successfully!", items);
})


// controller for update a item by its id  
const updateAItem = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const item = await Item.findByIdAndUpdate(id, data, { new: true });
    sendResponse(res, 201, "Items updated successfully!", item);
})

// controller for delete a item by its id
const deleteAItem = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const item = await Item.findByIdAndDelete(id);
    sendResponse(res, 201, "Items deleted successfully!", item);
})


export const itemControllers = {
    createItem,
    getGameItems,
    updateAItem,
    deleteAItem
}