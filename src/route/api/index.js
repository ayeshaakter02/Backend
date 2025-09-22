const express = require("express")
const router = express.Router()

// router.get("/", (req,res)=>{
//     return res.send("api route working .....")
// })

// http://localhost:3000/api/v1/auth
const auth = require('./auth')
router.use('/auth', auth)

module.exports = router;