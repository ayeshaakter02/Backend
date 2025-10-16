const express = require("express")
const router = express.Router()
const auth = require('./auth')
const banner = require('./banner')
const category = require("./category")

// http://localhost:3000/api/v1/auth
router.use('/auth', auth)
// http://localhost:3000/api/v1/banner
router.use('/banner', banner)
// http://localhost:3000/api/v1/category
router.use("/category", category)
module.exports = router;