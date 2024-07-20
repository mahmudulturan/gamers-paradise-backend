import express from 'express';
import verifyUser from '../middlewares/verifyUser';
import { currentUser } from '../controllers/user.controllers';

const router = express.Router();

router
    /**
        * @route GET /api/v1/user/current-user
        * @group Current User - Operations about get the current user
        * @produces application/json
        * @returns {object} 200 - An object containing the registration status and user's information.
        * @returns {object} 409 - An object containing an error message if the user already exists.
        * @returns {object} 500 - An object containing an error message if there's a server error.
        */
    .get('/current-user', verifyUser("user", "admin"), currentUser);


export default router;