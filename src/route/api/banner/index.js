const express = require("express");
const { addBannerController, deleteBannerController } = require("../../../controller/bannerController");
const upload = require("../../../utils/addbannerMiddleware");
const { TokenCheckMiddelware, adminCheck } = require("../../../utils/authMiddleware");
const router = express.Router()

// http://localhost:3000/api/v1/banner/addbanner
router.post("/addbanner",TokenCheckMiddelware,adminCheck, upload.single("banner") , addBannerController)
// http://localhost:3000/api/v1/banner/deletebanner/:id
router.delete("/deletebanner/:id",TokenCheckMiddelware, adminCheck, deleteBannerController)

module.exports = router;