const express = require("express");
const cron = require("node-cron");
const sendMail = require("../utils/sendMail.js");
require("dotenv").config();

async function emailHandler(req, res) {
  res.send("Hello from Node.js");
  const message = {
    from: process.env.EMAIL_SENDER,
    to: process.env.EMAIL_RECEIVER,
    subject: "Hello from Node.js",
    text: "Hello from Node.js",
  };
  cron.schedule("* * * * *", async () => {
    console.log("sending email");
    await sendMail({ message });
  });
}
module.exports = emailHandler;
