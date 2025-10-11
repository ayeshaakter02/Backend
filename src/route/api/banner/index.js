const express = require("express");
const { addBannerController } = require("../../../controller/bannerController");
const router = express.Router()
const upload = require("../../../utils/addbannerMiddleware");

// http://localhost:3000/api/v1/banner/addbanner
router.post("/addbanner", upload.single("banner") , addBannerController)

module.exports = router;