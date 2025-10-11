const express = require("express");
const { addBannerController } = require("../../../controller/bannerController");
const multer  = require('multer')
const router = express.Router()
//bannerMiddleware start
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    console.log(file)
    const randomtext = Date.now() + '-' + Math.round(Math.random() * 1E9)
    let fileextension = file.originalname.split(".")
    let extension = fileextension[fileextension.length-1]
    cb(null, file.fieldname + '-' + randomtext + "." + extension)
  }
})

function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: images only! (jpeg, jpg, png, gif)')
    }
}

const upload = multer({ storage: storage, limits:{fileSize:2000000}, fileFilter:function(req, file, cb){
    checkFileType(file, cb)
} })
//bannerMiddleware end
// http://localhost:3000/api/v1/banner/addbanner
router.post("/addbanner", upload.array("banner") , addBannerController)

module.exports = router;