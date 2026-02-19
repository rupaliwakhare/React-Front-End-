import{createProduct,getProduct,updateProduct} from "../controllers/productControlles.js";
import express from "express";

const productRouter = express.Router();


productRouter.post("/create",createProduct)
productRouter.get("/get",getProduct)
productRouter.put("/update/:id",updateProduct)

export default productRouter;