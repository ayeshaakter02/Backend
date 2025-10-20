const express = require("express");
const { addCategoryController, deleteCategoryController } = require("../../../controller/categoryController");
const router = express.Router()

// http://localhost:3000/api/v1/category/addcategory
router.post("/addcategory", addCategoryController)
// http://localhost:3000/api/v1/category/deletecategory/:id
router.delete("/deletecategory/:id", deleteCategoryController)
module.exports = router; 