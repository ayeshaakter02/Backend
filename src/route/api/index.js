const express = require("express")
const router = express.Router()
const auth = require('./auth')
const banner = require('./banner')

// http://localhost:3000/api/v1/auth
router.use('/auth', auth)
// http://localhost:3000/api/v1/banner
router.use('/banner', banner)

module.exports = router;