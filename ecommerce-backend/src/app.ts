import express from "express";
import {config} from 'dotenv';
import morgan from "morgan";


// Importting Routes
import userRoutes from './routes/user.js';
import productRoute from './routes/products.js'
import orderRoute from "./routes/order.js";

import { connectDB } from "./utils/features.js";
import NodeCache from "node-cache";


config({
    path:"./.env"
})

console.log(process.env.PORT,'portads');
const port = process.env.PORT||3000;
const mongoURI = process.env.MONGO_URI || "";

connectDB(mongoURI);
export const myCache = new NodeCache();

const app = express();
app.use(express.json());
app.use(morgan("dev"));


//Using Routes

app.use("/api/v1/user",userRoutes)
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.get("/",(req,res)=>{
    res.send("Api Working with /api/v1");
})

app.listen(port,()=>{
    console.log(`started ${port}`)
})