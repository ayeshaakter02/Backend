const express = require("express")
const router = express.Router()
const auth = require('./auth')
const banner = require('./banner')
const category = require("./category")
const product = require("./product")

// http://localhost:3000/api/v1/auth
router.use('/auth', auth)
// http://localhost:3000/api/v1/banner
router.use('/banner', banner)
// http://localhost:3000/api/v1/category
router.use("/category", category)
// http://localhost:3000/api/v1/product
router.use("/product", product)
module.exports = router;