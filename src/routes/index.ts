import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import gameRoutes from './game.routes';
import itemRoutes from './item.routes';
import { Router } from 'express';

const router = Router();

const allRoutes = [
    {
        path: '/auth',
        route: authRoutes
    },
    {
        path: '/user',
        route: userRoutes
    },
    {
        path: '/game',
        route: gameRoutes
    },
    {
        path: '/item',
        route: itemRoutes
    },
]

allRoutes.forEach(route => router.use(route.path, route.route));


export default router;