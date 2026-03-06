import express from "express"
import cors from "cors"
import Razorpay from "razorpay"
import crypto from "crypto"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())

// razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.key_id,
  key_secret: process.env.key_secret,
});

app.post("/create",async(req,res)=>{
    const {amount}= req.body;
    const options = {
        amount:amount*100,
        currency:"INR",
        receipt:"receipt_"+Date.now()
    }

    const order = await razorpay.orders.create(options)
    res.send(order)
})

app.post ("verify",(req,res)=>{
    const {
        order_id,
        payment_id,
        signature
    } = req.body;
    const a = order_id +"|" + payment_id;

    const expectedsign = crypto
    .createHmac("sha256",process.env.key_secret)
    .update(a)
    .digest("hex")

    if(expectedsign == signature){
        res.send("correct");

    }else{
        res.send("Failed")
    }
})

app.listen(PORT,()=>{
    console.log(`server is runnign on http://localhost:${PORT}`);
    
})