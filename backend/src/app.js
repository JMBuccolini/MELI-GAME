import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from './routes/tasks.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express();

app.use(cors({
    origin: process.env.HOST || '*',
    credentials: true
}))
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser())
app.use("/api", authRoutes);
app.use("/api", taskRoutes)

export default app;
