const nodemailer = require("nodemailer");
require("dotenv").config();
const email_config = require("../config/emailConfig.js");

const transporter = nodemailer.createTransport({ email_config });

async function sendMail(message) {
  try {
    let result = await transporter.sendMail(message);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = sendMail;
