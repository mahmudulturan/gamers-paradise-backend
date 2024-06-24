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