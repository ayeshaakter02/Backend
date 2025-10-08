const userModel = require("../model/signup.model");
const generateOTP = require("../utils/otp");
const sendEmail = require("../utils/send-email");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const signupController = async (req, res, next) => {
  try {
    let { name, email, password, phone, image, role } = req.body;

    let userfind = await userModel.findOne({ email });

    if (userfind) {
      return res.status(500).json({
        success: false,
        message: "email already exist",
      });
    }

    let otp = generateOTP();

    const hash = await bcrypt.hash(password, 10);

    const user = new userModel({
      name,
      email,
      password,
      phone,
      image,
      role,
      otp,
    });

    await user.save();
    sendEmail(email, otp);

    // setTimeout(async () => {
    //   await userModel.findOneAndUpdate({ email }, { otp: null }, { new: true });
    //   console.log("otp removed");
    // }, 60000);

    let info = {
      name: user.name,
      email: user.email,
    };

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: info,
    });
  } catch (err) {
    next(err);
  }
};

const verifyOtpController = async (req, res, next) => {
  let { email, otp } = req.body;

  let user = await userModel.findOne({ email });

  if (!user) {
    return res.status(404).json({ success: false, message: "User Not Found" });
  } else {
    if (user.otp === otp) {
      let verify = await userModel
        .findOneAndUpdate({ email }, { verify: true }, { new: true })
        .select("-password");

      return res.status(200).json({
        success: true,
        message: "OTP verify successful",
        data: verify,
      });
    } else {
      return res.status(404).json({ success: false, message: "Otp Not Match" });
    }
  }

  return res.send(user);
};

const loginController = async (req, res, next) => {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email });

  if (!user) {
    return res
      .status(404)
      .json({ success: false, message: "invalid credential" });
  } else {
    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        // let token = jwt.sign(
        //   { email: user.email, role: user.role },
        //   process.env.PRIVETE_KEY,
        //   { expiresIn: "60m" }
        // );

        // req.session.cookie.secure = true;
        req.session.cookie.maxAge = 60000;
        req.session.userInfo = user;

        return res.status(200).json({
          success: true,
          message: "login successfull",
          data: user,
          // token,
        });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "invalid credential" });
      }
    });
  }
};

const alluserController = async (req, res, next) => {
  try {
    if (req.session) {
      if (req.session.userInfo.role == "admin") {
        let allusers = await userModel.find({}).select("-paaword");
        return res.status(200).json({
          success: true,
          message: "all users fetch successful",
          data: allusers,
        });
      } else {
        return res.status(401).json({ success: true, message: "unauthorize" });
      }
    }else{
      return res.status(404).json({success:false, message: "session expire"})
    }

  } catch (error) {
    next(error);
  }
};

module.exports = {
  signupController,
  verifyOtpController,
  loginController,
  alluserController,
};
