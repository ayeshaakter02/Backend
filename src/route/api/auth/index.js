const express = require("express");
const { signupController, verifyOtpController, loginController } = require("../../../controller/authController");
const router = express.Router()

// http://localhost:3000/api/v1/auth/signup
router.post("/signup",signupController)
// http://localhost:3000/api/v1/auth/verify-otp
router.post("/verify-otp", verifyOtpController)
// http://localhost:3000/api/v1/auth/login
router.post("/login", loginController) 

module.exports = router;