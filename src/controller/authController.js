const userModel = require("../model/signup.model");

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
    return res
      .status(201)
      .json({ success: true, message: "user created successfull", data: user })
      .catch((err) => {
        next(err);
      });
  });

  // if(!name){
  //     return res.status(404).json({ success:false, msg: "Name is required"})
  // }
  // if(!email){
  //     return res.status(404).json({ success:false, msg: "email is required"})
  // }
  // else{
  //     return res.send("all ok");
  // }
  // return res.send(req.body)
};

module.exports = { signupController };
