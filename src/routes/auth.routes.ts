import express from 'express';
import { registerUser } from '../controllers/auth.controllers';

const router = express.Router();

router
    /**
     * @route POST /api/v1/auth/register
     * @group User Registration - Operations about user registration
     * @param {string} name.body.required - The name of the user. Example: John Doe
     * @param {string} email.body.required - The email of the user. Example: user@example.com
     * @param {string} password.body.required - The password of the user. Example: userpassword
     * @produces application/json
     * @returns {object} 200 - An object containing the registration status and a success message.
     * @returns {object} 409 - An object containing an error message if the user already exists.
     * @returns {object} 500 - An object containing an error message if there's a server error.
     */
    .post('/register', registerUser);

    
export default router;