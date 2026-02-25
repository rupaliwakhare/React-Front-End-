import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoute.js";
import cors from "cors"


dotenv.config()

const app = express();

app.use(express.json())
aap.use(cors);


const PORT = process.env.PORT || 5002

connectDB()

app.use("/api/product",productRouter)

app.listen(PORT,()=>{
    console.log(`server is runnung on http://localhost:${PORT}`);
    
})