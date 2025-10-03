const userModel = require("../model/signup.model");
const generateOTP = require("../utils/otp");
const sendEmail = require("../utils/send-email");

const signupController = async (req, res, next) => {
  let { name, email, password, phone, image, role } = req.body;

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
    }
    return res
      .status(201)
      .json({ success: true, message: "user created successfull", data: user })
      .catch((err) => {
        next(err);
      });
  });
};

const verifyOtpController = async (req, res, next)=>{
  let {email, otp} = req.body

  let user =await userModel.findOne({email})
  if(!user){
    return res.status(404).json({success:false, message:"user not found"})
  }else{
    if(user.otp === otp){
      let verify = await userModel.findOneAndUpdate({email}, {verify:true, otp:null}, {new:true}.select("-password"))
      return res.status(200).json({success:true, message:"otp verified", data:verify})
    }else{
    return res.status(404).json({success:false, message:"otp not match"})
  }
  }
}

module.exports = { signupController, verifyOtpController }; 
