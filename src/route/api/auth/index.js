const express = require("express");
const { signupController, verifyOtpController, loginController, alluserController, logoutController } = require("../../../controller/authController");
// const { TokenCheckMiddelware, adminCheck } = require("../../../utils/authMiddleware");
const router = express.Router()

// http://localhost:3000/api/v1/auth/signup
router.post("/signup",signupController)
// http://localhost:3000/api/v1/auth/verify-otp
router.post("/verify-otp", verifyOtpController)
// http://localhost:3000/api/v1/auth/login
router.post("/login", loginController) 
// http://localhost:3000/api/v1/auth/allusers

// router.get("/allusers",TokenCheckMiddelware, adminCheck, alluserController) 
router.get("/allusers", alluserController) 

router.post("/logout", logoutController) 
module.exports = router;