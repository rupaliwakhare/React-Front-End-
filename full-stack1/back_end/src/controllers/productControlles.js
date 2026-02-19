import productModel from "../models/productModel.js";

const createProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body;

    const product = await productModel.create({
      name,
      price,
      category,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating product",
      error: error.message,
    });
  }
};

export default createProduct;
