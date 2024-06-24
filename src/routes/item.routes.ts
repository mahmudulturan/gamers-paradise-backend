import { Router } from "express";
import { itemControllers } from "../controllers/item.controllers";

const router = Router();

router
    /**
     * @route POST /items
     * @group Items - Operations about game items
     * @param {string} game.body.required - The ID of the game this item belongs to. Example: "60d5ecb77c3bfa40015bdc123"
     * @param {number} price.body.required - The price of the item. Example: 59.99
     * @param {string} item_type.body.required - The type of the item. Example: "Topup UC"
     * @param {number} quantity.body.required - The quantity of the item available. Example: 50
     * @produces application/json
     * @returns {object} 201 - An object containing the newly created item details and a success message.
     * @returns {object} 400 - An object containing an error message if the request body is invalid.
     * @returns {object} 500 - An object containing an error message if there's a server error.
     */
    .post('/', itemControllers.createItem);

export default router;