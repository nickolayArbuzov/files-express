import express from 'express'
import cors from 'cors';
import { authRouter } from './routes/authRouter';
import { fileRouter } from "./routes/fileRouter";

export const app = express()

app.use(express.json())

app.use(cors({
    origin: '*', 
}));

app.use('/', authRouter) 
app.use('/file', fileRouter) 
