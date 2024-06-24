import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import Game from "../models/game.model";
import sendResponse from "../utils/sendResponse";

// controller for create a new game
export const createGame = catchAsync(async (req: Request, res: Response) => {
    const { name, image, description } = req.body;
    const game = await Game.create({ name, image, description });
    sendResponse(res, 201, true, "Game created successfully!", game);
})


// controller for get all games
export const getAllGames = catchAsync(async (req: Request, res: Response) => {
    const games = await Game.find();
    sendResponse(res, 200, true, "Games fetched successfully!", games);
})


// controller for get a game by id
export const getAGame = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const game = await Game.findById(id);
    sendResponse(res, 200, true, "Game fetched successfully!", game);
})


// controller for update a game by id
export const updateAGame = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const game = await Game.findByIdAndUpdate(id, data, { new: true });
    sendResponse(res, 201, true, "Game updated successfully!", game);
})

// controller for delete a game by id
export const deleteAGame = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const game = await Game.findByIdAndDelete(id);
    sendResponse(res, 201, true, "Game deleted successfully!", game);
})