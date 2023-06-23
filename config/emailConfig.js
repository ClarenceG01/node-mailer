require("dotenv").config();

const email_config = {
  service: "gmail",
  port: 587,
  secure: true,
  secureConnection: false,
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PWD,
  },
  tls: {
    rejectUnAuthorized: true,
  },
};

module.exports = email_config;
