import { config as dotenvConfig } from 'dotenv';
dotenvConfig();
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


// create app
const app = express();

//configs
import './configs/database';
import './configs/passport';


//routes
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import gameRoutes from './routes/game.routes';
import itemRoutes from './routes/item.routes';

import globalErrorHandler from './errorHandlers/globalErrorHandler';
import notFoundErrorHandler from './errorHandlers/notFoundErrorHandler';


// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000" || "", process.env.LIVE_CLIENT_URL || ""],
    credentials: true
}));


app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/game', gameRoutes);
app.use('/api/v1/item', itemRoutes);


// home route of this server
app.get('/', (req: Request, res: Response) => {
    res.send("Wellcome to Barber Voyage server")
})

// response for not found route
app.use(notFoundErrorHandler);


// global error handler
app.use(globalErrorHandler);

export default app;