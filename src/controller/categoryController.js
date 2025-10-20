let slugify = require("slugify");
const categoryModel = require("../model/category.model");
const fs = require("fs");
const path = require("path");
let addCategoryController = async (req, res) => {
  try {
    let { name } = req.body;
    let { filename } = req.file;

    let slug = slugify(name, {
      replacement: "-",
      remove: undefined,
      lower: true,
      trim: true,
    });

    let addcategory = new categoryModel({
      name,
      slug,
      image: `${process.env.SERVER_URL}/${filename}`,
    });

    await addcategory.save();

    return res.status(201).json({
      success: true,
      message: "category created successful",
      data: addcategory,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: error.message || error });
  }
};

module.exports ={ addCategoryController}