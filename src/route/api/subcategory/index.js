const express = require("express");
const { addSubCategoryController, deleteSubCategoryController } = require("../../../controller/subcategoryController");

const router = express.Router()

// http://localhost:3000/api/v1/subcategory/addsubcategory
router.post("/addsubcategory", addSubCategoryController)
// http://localhost:3000/api/v1/subcategory/deletesubcategory/:id
router.delete("/deletesubcategory/:id", deleteSubCategoryController)


module.exports = router; 