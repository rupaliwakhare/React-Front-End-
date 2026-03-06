import express from "express";
import cors from "cors";
import Razorpay from "razorpay";

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: "rzp_test_SIjtYajYxGRq20",
  key_secret: "D5lWFWh8ZTjnyNcB6QNo7T08",
});

// order api

app.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
    };

    const order = await razorpay.orders.create(options);
    res.send(order);
  } catch (error) {
    res.status(500).json({error:"Failed to create order"});
  }
});

// Razorpay uses paise
// 500*100 => 5000

app.listen(3000, () => {
    console.log(`server is running on http://localhost:3000`);
    
});
