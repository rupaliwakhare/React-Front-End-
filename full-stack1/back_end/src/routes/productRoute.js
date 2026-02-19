import{createProduct,getProduct} from "../controllers/productControlles.js";
import express from "express";

const productRouter = express.Router();


productRouter.post("/create",createProduct)
productRouter.get("/get",getProduct)

export default productRouter;