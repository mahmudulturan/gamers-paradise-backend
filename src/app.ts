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

import globalErrorHandler from './middlewares/globalErrorHandler';
import notFoundErrorHandler from './middlewares/notFoundErrorHandler';
import dot_env from './configs/dotenv';


// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [dot_env.local_client_url as string, dot_env.live_client_url as string],
    credentials: true
}));


// routes
app.use('/api/v1', routes);


// home route of this server
app.get('/', (req: Request, res: Response) => {
    res.send("Wellcome to Gamers Paradise server")
})

// response for not found route
app.use(notFoundErrorHandler);


// global error handler
app.use(globalErrorHandler);

export default app;