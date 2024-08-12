import app from "./app.js";
import { connectDB } from "./db.js";
import dotenv from 'dotenv'
dotenv.config()
connectDB();

app.listen(process.env.PORT);
console.log('Server on port', process.env.PORT)