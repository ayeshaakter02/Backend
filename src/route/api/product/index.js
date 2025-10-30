const express = require("express");
const { createProductController } = require("../../../controller/productController");
const upload = require("../../../utils/uploadMiddleware");

const router = express.Router()

// http://localhost:3000/api/v1/product/createproduct
router.post("/createproduct",upload.array("product") ,createProductController)
// // http://localhost:3000/api/v1/product/deletesubcategory/:id
// router.delete("/deletesubcategory/:id", deleteSubCategoryController)
// // http://localhost:3000/api/v1/product/updatesubcategory/:id
// router.patch("/updatesubcategory/:id",  updatesubcategoryController)

module.exports = router;