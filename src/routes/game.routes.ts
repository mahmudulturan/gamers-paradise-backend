import express from 'express';
import { createGame } from '../controllers/game.controllers';

const router = express.Router();

router
    /**
     * @route POST /games
     * @group Games - Operations about games
     * @param {string} name.body.required - The name of the game. Example: Super Mario Odyssey
     * @param {string} image.body.required - The image URL of the game. Example: http://example.com/super-mario.jpg
     * @param {string} description.body.required - A brief description of the game. Example: An action-adventure platformer video game
     * @produces application/json
     * @returns {object} 201 - An object containing the game details and a success message.
     * @returns {object} 400 - An object containing an error message if the request body is invalid.
     * @returns {object} 500 - An object containing an error message if there's a server error.
     */
    .post('/', createGame);


export default router;