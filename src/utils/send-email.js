const nodemailer = require("nodemailer");

const sendEmail = async (email)=>{
    const transporter = nodemailer.createTransport({
  host: process.env.AUTH_EMAIL,
  port: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASSWORD,
  },
});
const info = await transporter.sendMail({
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });
}

module.exports = sendEmail