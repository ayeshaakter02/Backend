const express = require("express")
const router = express.Router()

// console.log("api route working")
router.get("/", (req,res)=>{
    return res.send("api route working .....")
})


module.exports = router;