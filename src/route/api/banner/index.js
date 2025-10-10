const express = require("express");
const { addBannerController } = require("../../../controller/bannerController");
const multer  = require('multer')
const router = express.Router()

const upload = multer({ dest: 'uploads/' })

// http://localhost:3000/api/v1/banner/addbanner
router.post("/addbanner", upload.single("banner") , addBannerController)

module.exports = router;