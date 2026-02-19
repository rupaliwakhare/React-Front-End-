import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoute.js";


dotenv.config()

const app = express();

app.use(express.json())


const PORT = process.env.PORT || 5002

connectDB()

app.use("/api/product",productRouter)

app.listen(PORT,()=>{
    console.log(`server is runnung on http://localhost:${PORT}`);
    
})