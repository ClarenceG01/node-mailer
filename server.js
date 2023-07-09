const express = require("express");
const cron = require("node-cron");
const sendMail = require("./utils/sendMail.js");
require("dotenv").config();

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello you ");
});
const message = {
  from: process.env.EMAIL_SENDER,
  to: process.env.EMAIL_RECEIVER,
  subject: "Hello from Node.js",
  text: "Hello from Node.js.Find the attached file.",
  attachments: [
    {
      filename: "report.txt",
      path: "./report.txt",
    },
  ],
};
// cron.schedule("* * * * * *", async () => {
//   console.log("sending email");
//   await sendMail(message);
// });
async function sendEmail() {
  console.log("sending email");
  await sendMail(message);
}
sendEmail();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
