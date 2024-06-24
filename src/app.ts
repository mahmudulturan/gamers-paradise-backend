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


// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000" || "", process.env.LIVE_CLIENT_URL || ""],
    credentials: true
}));


app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);


// home route of this server
app.get('/', (req: Request, res: Response) => {
    res.send("Wellcome to Barber Voyage server")
})

// response for not found route
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send({ message: "The specified route cannot be located or identified." })
})

export default app;