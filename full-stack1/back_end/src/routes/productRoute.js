import createProduct from "../controllers/productControlles.js";
import express from "express";

const productRouter = express.Router();


productRouter.post("/create",createProduct)

export default productRouter;