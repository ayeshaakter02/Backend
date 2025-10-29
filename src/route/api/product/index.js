const express = require("express");
const { createProductController } = require("../../../controller/productController");

const router = express.Router()

// http://localhost:3000/api/v1/product/createproduct
router.post("/createproduct", createProductController)
// // http://localhost:3000/api/v1/subcategory/deletesubcategory/:id
// router.delete("/deletesubcategory/:id", deleteSubCategoryController)
// // http://localhost:3000/api/v1/subcategory/updatesubcategory/:id
// router.patch("/updatesubcategory/:id",  updatesubcategoryController)

module.exports = router;