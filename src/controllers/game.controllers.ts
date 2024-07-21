import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import Game from "../models/game.model";
import sendResponse from "../utils/sendResponse";
import Item from "../models/item.model";

// controller for create a new game
export const createGame = catchAsync(async (req: Request, res: Response) => {
    const { name, image, description, categories, items } = req.body;
    const game = await Game.create({ name, image, description, categories, items });
    sendResponse(res, 201, "Game created successfully!", game);
})


// controller for get all games
export const getAllGames = catchAsync(async (req: Request, res: Response) => {
    const games = await Game.find();
    sendResponse(res, 200, "Games fetched successfully!", games);
})


// controller for get a game by id
export const getAGame = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const game = await Game.findById(id).populate("categories.items");
    sendResponse(res, 200, "Game fetched successfully!", game);
})


// controller for update a game by id
export const updateAGame = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const { categories, ...data } = req.body;
    const game = await Game.findByIdAndUpdate(id, { ...data, $addToSet: { categories } }, { new: true });
    sendResponse(res, 201, "Game updated successfully!", game);
})

// controller for delete a game by id
export const deleteAGame = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const game = await Game.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    const filter = { game: game?._id }
    const updatedData = {
        $set: {
            isDeleted: true
        }
    }
    await Item.updateMany(filter, updatedData)
    sendResponse(res, 201, "Game deleted successfully!", null);
})