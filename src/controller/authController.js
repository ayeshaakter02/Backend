const userModel = require("../model/signup.model");
const generateOTP = require("../utils/otp");
const sendEmail = require("../utils/send-email");
const bcrypt = require("bcrypt");


const signupController = async (req, res, next) => {
  let { name, email, password, phone, image, role } = req.body;

  let userfind = await userModel.findOne({ email });

  if (userfind) {
    return res
      .status(500)
      .json({ success: false, message: "email already exist" });
  } else {
    let otp = generateOTP();

    let user = new userModel({
      name,
      email,
      password,
      phone,
      image,
      role,
      otp,
    });

    await user.save().then(() => {
      sendEmail(email, otp);

      // setTimeout(async () => {
      //   let otpremove = await userModel.findOneAndUpdate({email}, {otp:null}, {new:true})
      //   await otpremove.save().then(()=>{
      //     console.log("otp remove")
      //   })
      // }, 60000);

      let info = {
        name: user.name,
        email: user.email,
      };
      return res
        .status(201)
        .json({
          success: true,
          message: "user created successfull",
          data: info,
        })
        .catch((err) => {
          next(err);
        });
    });
  }
};

const verifyOtpController = async (req, res, next) => {
  let { email, otp } = req.body;

  let user = await userModel.findOne({ email });
  if (!user) {
    return res.status(404).json({ success: false, message: "user not found" });
  } else {
    if (user.otp === otp) {
      let verify = await userModel.findOneAndUpdate(
        { email },
        { verify: true, otp: null },
        { new: true }.select("-password")
      );
      return res
        .status(200)
        .json({ success: true, message: "otp verified", data: verify });
    } else {
      return res.status(404).json({ success: false, message: "otp not match" });
    }
  }
};

const loginController = async (res, req, next) => {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email });

  if (!user) {
    return res
      .status(404)
      .json({ success: false, message: "invalid credential" });
  } else {
    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        return res
          .status(200)
          .json({ success: true, message: "login successfull", data: user });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "invalid credential" });
      }
    });
  }
};

module.exports = { signupController, verifyOtpController, loginController };
