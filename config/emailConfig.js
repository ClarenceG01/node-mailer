require("dotenv").config();

const email_config = {
  host: "smtp.gmail.com",

  port: 587,

  secure: false,

  requireTLS: true,

  auth: {
    user: process.env.EMAIL_SENDER,

    pass: process.env.EMAIL_PWD,
  },
};

module.exports = email_config;
