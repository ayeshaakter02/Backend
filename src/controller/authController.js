const userModel = require("../model/signup.model");
const sendEmail = require("../utils/send-email");

const signupController = async (req, res, next) => {
  let { name, email, password, phone, image, role } = req.body;



  let user = new userModel({
    name,
    email,
    password,
    phone,
    image,
    role,
  });

  await user.save().then(() => {
    sendEmail(email)
    return res
      .status(201)
      .json({ success: true, message: "user created successfull", data: user })
      .catch((err) => {
        next(err);
      });
  });
};

module.exports = { signupController };
