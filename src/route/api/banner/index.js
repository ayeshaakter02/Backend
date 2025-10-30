const express = require("express");
const { addBannerController, deleteBannerController, updateBannerController, allBannersController } = require("../../../controller/bannerController");
const upload = require("../../../utils/uploadMiddleware");
const { TokenCheckMiddelware, adminCheck } = require("../../../utils/authMiddleware");
const router = express.Router()

// http://localhost:3000/api/v1/banner/addbanner
// router.post("/addbanner",TokenCheckMiddelware,adminCheck, upload.single("banner") , addBannerController)
router.post("/addbanner", upload.single("banner") , addBannerController)
// http://localhost:3000/api/v1/banner/deletebanner/:id
// router.delete("/deletebanner/:id",TokenCheckMiddelware, adminCheck, deleteBannerController)
router.delete("/deletebanner/:id", deleteBannerController)
// http://localhost:3000/api/v1/banner/updatebanner/:id
router.patch("/updatebanner/:id",upload.single("banner") , updateBannerController)
// http://localhost:3000/api/v1/banner/allbanners
router.get("/allbanners", allBannersController)

module.exports = router;