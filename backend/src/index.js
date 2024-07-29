import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();

app.listen(5050);
console.log('Server on port', 5050)