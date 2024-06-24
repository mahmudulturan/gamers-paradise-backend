import { config as dotenvConfig } from 'dotenv';
dotenvConfig();
import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


// create app
const app = express();

//configs
import './configs/database';
import './configs/passport';


//routes
import routes from './routes/index';

import globalErrorHandler from './errorHandlers/globalErrorHandler';
import notFoundErrorHandler from './errorHandlers/notFoundErrorHandler';


// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000" || "", process.env.LIVE_CLIENT_URL || ""],
    credentials: true
}));


// routes
app.use('/api/v1', routes);


// home route of this server
app.get('/', (req: Request, res: Response) => {
    res.send("Wellcome to Barber Voyage server")
})

// response for not found route
app.use(notFoundErrorHandler);


// global error handler
app.use(globalErrorHandler);

export default app;