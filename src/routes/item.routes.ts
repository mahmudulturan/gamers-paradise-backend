import { Router } from "express";
import { itemControllers } from "../controllers/item.controllers";
import verifyUser from "../middlewares/verifyUser";

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
    .post('/', verifyUser("admin", "super-admin"), itemControllers.createItem);


router
    /**
     * @route GET /items/:id
     * @group Items - Operations about get item
     * @description Retrieve a item associated with a specific  ID.
     * 
     * @param {string} id.path.required - The unique identifier of the game whose items are to be retrieved. Example: "60d5ecb77c3bfa40015bdc123"
     * @produces application/json
     * @returns {Item} 200 - An array of item objects associated with the specified game.
     * @returns {object} 404 - An object containing an error message if the game is not found.
     * @returns {object} 500 - An object containing an error message if there's a server error.
     */
    .get('/:id', verifyUser("admin", "super-admin"), itemControllers.getAItem);


router
    /**
     * @route PUT /items/:id
     * @group Items - Operations about game items
     * @description Update an existing item by its ID.
     * 
     * @param {string} id.path.required - The unique identifier of the item to be updated. Example: "60d5ecb77c3bfa40015bdc124"
     * @param {Object} item.body.required - The updated item details. Example: { price: 59.99, quantity: 30 }
     * @produces application/json
     * @returns {object} 200 - An object containing the updated item details.
     * @returns {object} 404 - An object containing an error message if the item is not found.
     * @returns {object} 500 - An object containing an error message if there's a server error.
     */
    .put('/:id', verifyUser("admin", "super-admin"), itemControllers.updateAItem);


router
    /**
     * @route DELETE /items/:id
     * @group Items - Operations about game items
     * @description Delete an existing item by its ID.
     * 
     * @param {string} id.path.required - The unique identifier of the item to be deleted. Example: "60d5ecb77c3bfa40015bdc124"
     * @produces application/json
     * @returns {object} 200 - An object containing a success message indicating that the item has been deleted.
     * @returns {object} 404 - An object containing an error message if the item is not found.
     * @returns {object} 500 - An object containing an error message if there's a server error.
     */
    .delete('/:id', verifyUser("admin", "super-admin"), itemControllers.deleteAItem);

export default router;