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