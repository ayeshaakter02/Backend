const express = require("express")
const router = express.Router()

console.log("route working")
// connect with api folder
const api = require("./api")   

router.use(process.env.BASE_URL , api)

module.exports = router;