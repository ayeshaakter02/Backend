const express = require("express")
const router = express.Router()

// http://localhost:3000/api/v1/auth
const auth = require('./auth')
router.use('/auth', auth)

module.exports = router;