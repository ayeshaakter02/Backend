const express = require("express");
const { addCategoryController, deleteCategoryController, updateCategoryController } = require("../../../controller/categoryController");
const upload = require("../../../utils/addbannerMiddleware");
const router = express.Router()

// http://localhost:3000/api/v1/category/addcategory
router.post("/addcategory", addCategoryController)
// http://localhost:3000/api/v1/category/deletecategory/:id
router.delete("/deletecategory/:id", deleteCategoryController)
// http://localhost:3000/api/v1/category/categoryupdate/:id
router.put("/categoryupdate/:id",upload.single("category") , updateCategoryController)


module.exports = router; 