const nodemailer = require("nodemailer");

require("dotenv").config();

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: email,
    pass: password,
  },
});

module.exports = { transporter };
