import verifyUser from '../middlewares/verifyUser';
import { gameControllers } from '../controllers/game.controllers';
import { Router } from 'express';

const router = Router();

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
    .post('/', verifyUser("admin", "super-admin"), gameControllers.createGame);


router
    /**
     * @route GET /games
     * @group Games - Operations about games
     * @produces application/json
     * @returns {array.<Game>} 200 - An array of game objects representing all games.
     * @returns {object} 500 - An object containing an error message if there's a server error.
     */
    .get('/', gameControllers.getAllGames);

router
    /**
     * @route GET /games/:id
     * @group Games - Operations about games
     * @param {number} id.path.required - The ID of the game to retrieve. Example: 123
     * @produces application/json
     * @returns {object} 200 - An object containing the requested game details.
     * @returns {object} 404 - An object containing an error message if the game is not found.
     * @returns {object} 500 - An object containing an error message if there's a server error.
     */
    .get('/:id', gameControllers.getAGame);


router
    /**
     * @route PUT /games/:id
     * @group Games - Operations about games
     * @param {number} id.path.required - The ID of the game to update. Example: 123
     * @param {string} name.body.required - The new name of the game. Example: Updated Game Name
     * @param {string} image.body.required - The new image URL of the game. Example: http://example.com/new-image.jpg
     * @param {string} description.body.required - A new brief description of the game. Example: An updated action-adventure platformer video game
     * @produces application/json
     * @returns {object} 200 - An object containing the updated game details.
     * @returns {object} 404 - An object containing an error message if the game is not found.
     * @returns {object} 500 - An object containing an error message if there's a server error.
     */
    .put('/:id', verifyUser("admin", "super-admin"), gameControllers.updateAGame);


router
    /**
     * @route DELETE /games/:id
     * @group Games - Operations about games
     * @param {number} id.path.required - The ID of the game to delete. Example: 123
     * @produces application/json
     * @returns {object} 200 - An object containing a success message indicating that the game has been deleted.
     * @returns {object} 404 - An object containing an error message if the game is not found.
     * @returns {object} 500 - An object containing an error message if there's a server error.
     */
    .delete('/:id', verifyUser("admin", "super-admin"), gameControllers.deleteAGame);

export default router;