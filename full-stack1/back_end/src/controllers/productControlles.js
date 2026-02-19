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

const getProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products); // 200 = OK
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedProduct = await productModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};




export {createProduct,getProduct,updateProduct};
