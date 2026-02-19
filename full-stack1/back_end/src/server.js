import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";


dotenv.config()

const app = express();


const PORT = process.env.PORT || 5002

connectDB()

app.listen(PORT,()=>{
    console.log(`server is runnung on http://localhost:${PORT}`);
    
})