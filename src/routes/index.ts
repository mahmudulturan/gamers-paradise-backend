import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import adminRoutes from './admin.routes';
import gameRoutes from './game.routes';
import itemRoutes from './item.routes';
import bookingRoutes from './booking.routes';
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
        path: '/admin',
        route: adminRoutes
    },
    {
        path: '/games',
        route: gameRoutes
    },
    {
        path: '/items',
        route: itemRoutes
    },
    {
        path: '/bookings',
        route: bookingRoutes
    },
]

allRoutes.forEach(route => router.use(route.path, route.route));


export default router;