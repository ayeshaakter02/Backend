const productModel = require("../model/product.model");
const createProductController = async (req, res) => {
  try {
    const {
      title, description, price, discountprice, reviews, variantType, stock, category, slug,
    } = req.body;



    let product = new productModel({
      title, description, price, discountprice, reviews, variantType, stock, category, slug,
    })
    await product.save()

    if (
      !title || !description || !price || !discountprice || !variantType || !stock || !category
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product data received successfully",
      data: req.body,
    });

  } catch (error) {
    console.error("Error in createProductController:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

module.exports = {createProductController}