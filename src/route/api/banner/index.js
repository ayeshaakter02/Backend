const express = require("express");
const { addBannerController } = require("../../../controller/bannerController");
const router = express.Router()

// http://localhost:3000/api/v1/banner/addbanner
router.post("/addbanner", addBannerController)

module.exports = router;