import dotenv from 'dotenv';
import app from "./app";
import dot_env from './configs/dotenv';

dotenv.config();

const port = dot_env.port || 7000;


// run the server
app.listen(port, () => {
    console.log(`Gamers Paradise server is running on port: ${port}`);
})